const cache = new Map();
const CACHE_TTL = 5 * 60 * 1000; // 5 min
const MAX_RETRIES = 1;
const TIMEOUT_MS = 15000;

async function fetchWithRetry(url, options, retries = MAX_RETRIES) {
  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      const res = await fetch(url, options);
      if (!res.ok) throw new Error(`HTTP ${res.status}: ${await res.text()}`);
      return res;
    } catch (err) {
      if (attempt === retries) throw err;
      console.warn(`Fetch attempt ${attempt + 1} failed. Retrying...`);
      await new Promise(r => setTimeout(r, 3000));
    }
  }
}

function jsonResponse(statusCode, data) {
  return {
    statusCode,
    body: JSON.stringify(data),
    headers: { "Access-Control-Allow-Origin": "*" }
  };
}

export async function handler(event) {
  try {
    const id = event.queryStringParameters?.q || "";

    // Native fetch in Node 18 environment
    const response = await fetch(`https://api.pokemontcg.io/v2/cards/${id}`, {
      headers: { "X-Api-Key": process.env.POKEMON_TCG_API_KEY }
    });

    if (!response.ok) {
      const errText = await response.text();
      return {
        statusCode: response.status,
        body: JSON.stringify({ error: errText }),
      };
    }

    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
}

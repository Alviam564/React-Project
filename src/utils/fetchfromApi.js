import pokemon from 'pokemontcgsdk'

pokemon.configure = ({ apiKey: process.env.POKEMON_TCG_API_KEY})

export const BASE_URL = 'https://api.pokemontcg.io/v2';

export const API_HEADER = {
  'X-Api-Key': process.env.VITE_POKEMON_TCG_API_KEY,
};
export const fetchfromAPI = async (endpoint) => {
  try {
    const data = await pokemon[endpoint]();
    return data;
  } catch (error) {
    console.error('Failed to fetch from API:', error);
    return null;
  }
};

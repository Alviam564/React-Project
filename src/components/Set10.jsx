let cardsData = []
let selectedID = ""
let selectedPriceType = ""
let selectedSuperType = ""
let selectedSubTypes = ""
let selectedEnergyTypes = ""
let selectedRarity = ""
let selectedPriceRange = ""

fetch('../src/data/unbroken-bonds.json')
  .then(response => response.json())
  .then(data => {
    cardsData = data;
    displayCards(data);
    createBackgroundCards()
  }
)
.catch(error => console.error("Failed to load JSON:", error));

function openMenu() {
  document.body.classList += " menu--open"
}

function closeMenu() {
  document.body.classList.remove('menu--open')
}

function createBackgroundCards() {
  const container = document.querySelector(".background-cards");

  for (let i = 0; i < 7; i++) {
    const card = document.createElement("div")
    card.classList.add("card")

    const img = document.createElement("img")
    img.src = getRandomCardImage()

    card.appendChild(img)
    container.appendChild(card)

    setInterval(() => {
      img.src = getRandomCardImage()
    }, 10000);
  }
}

function getRandomCardImage() {
  if(!Array.isArray(cardsData) || cardsData.length === 0) {
    return "../src/assets/Pokémon_Trading_Card_Game_logo.svg.png"
  }
  const randomIndex = Math.floor(Math.random() * cardsData.length)
  return cardsData[randomIndex].images.large;
}

function getFormattedPrices(pricesArr) {
  const priceTypes = ["normal", "reverseHolofoil", "holofoil"]
  const labels = {
    normal: "normal",
    reverseHolofoil: "reverseHolofoil",
    holofoil: "holofoil",
  };

  let cardtypes = ""

  for (const priceGroup of pricesArr) {
    for (const type of priceTypes) {
      if (priceGroup[type]) {
        const low = priceGroup[type].low ?? "N/A";
        const high = priceGroup[type].high ?? "N/A";
        cardtypes += `
        <p><strong>${labels[type]} Low:</strong> $${low}</p>
        <p><strong>${labels[type]} High:</strong> $${high}</p>
        `;
      }
    }
  }

  return cardtypes
}

function displayCards(cards) {
  const container = document.getElementById('card-container'); 
  container.innerHTML = "";

  cards.forEach(card => {
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card-UB');

    cardDiv.innerHTML = `
      <h3>${card.name}</h3>
      <p><strong>Supertype:</strong> ${card.supertype}</p>
      <img src="${card.images.small}" alt="${card.name}">
      <p><strong>ID:</strong> ${card.id}</p>
      <p><strong>Type:</strong> ${card.types}</p>
      <p><strong>Rarity:</strong> ${card.rarity}</p>
      <p><strong>Set:</strong> ${card.set.name}</p>
      ${getFormattedPrices(card.prices)} 
      </div>
      `;

    container.appendChild(cardDiv);
  });
}

async function renderCards(filteredCards = cardsData) {
  const container = document.getElementById('card-container');
  container.innerHTML = '';
  
  if (filteredCards.len)
  if (
    !selectedPriceType &&
    !selectedSuperType &&
    !selectedSubTypes &&
    !selectedEnergyTypes &&
    !selectedRarity &&
    !selectedPriceRange
  ) {
    displayCards(cardsData);
    return;
  }


  if (selectedPriceType) {
    filteredCards = filteredCards.filter(card =>
      Array.isArray(card.prices) &&
      card.prices.some(price => price[selectedPriceType])
    );
  }

  if (selectedSuperType) {
    filteredCards = filteredCards.filter(card =>
      card.supertype === selectedSuperType
    );
  }
  
  if (selectedSubTypes) {
    filteredCards = filteredCards.filter(card =>
      card.subtypes?.includes(selectedSubTypes)
    );
  }

  if(selectedEnergyTypes) {
    filteredCards = filteredCards.filter(card =>
    card.types?.includes(selectedEnergyTypes))
  }

  if (selectedRarity) {
    filteredCards = filteredCards.filter(card =>
      card.rarity === selectedRarity
    );
  }


  if (selectedPriceRange && selectedPriceType) {
  
    filteredCards.sort((a, b) => {
      const aPriceEntry = a.prices?.find(p => p[selectedPriceType]);
      const bPriceEntry = b.prices?.find(p => p[selectedPriceType]);
  
      const aValue = aPriceEntry ? aPriceEntry[selectedPriceType]?.[selectedPriceRange === "LowToHigh" ? "low" : "high"] : Infinity;
      const bValue = bPriceEntry ? bPriceEntry[selectedPriceType]?.[selectedPriceRange === "LowToHigh" ? "low" : "high"] : Infinity;
  
      return selectedPriceRange === "LowToHigh"
        ? aValue - bValue
        : bValue - aValue;
    });
  }

  if (filteredCards.length === 0) {
    container.innerHTML = "<p>No cards found matching the filter.</p>";
    return;
  }
  
  displayCards(filteredCards);
}

function searchFunction() {
  const input = document.getElementById(`searchBar`)
  const filter = input.value.toUpperCase()

  let filteredCards = cardsData.filter(card => {
    return (
      card.name.toUpperCase().includes(filter) ||
      card.id.toUpperCase().includes(filter) ||
      card.supertype.toUpperCase().includes(filter) ||
      (card.types && card.types.some(type => type.toUpperCase().includes(filter))) ||
      (card.rarity && card.rarity.toUpperCase().includes(filter))
    )
  })
  renderCards(filteredCards)

}

function filterPriceRange(event) {
  selectedPriceRange = event.target.value;
  renderCards()
}

function filterPriceType(event) {
  selectedPriceType = event.target.value;
  renderCards()
}

function filterSuperType(event) {
  selectedSuperType = event.target.value;
  renderCards()
}

function filterSubTypes(event) {
  selectedSubTypes = event.target.value;
  renderCards()
}

function filterEnergyTypes(event) {
  selectedEnergyTypes = event.target.value;
  renderCards()
}

function filterRarity(event) {
  selectedRarity = event.target.value;
  renderCards()
}
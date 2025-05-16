import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API_HEADER, BASE_URL } from "../utils/fetchfromApi";


const Display = ({ setQueries = [], SearchbarAll, SearchbarSolo, cardClassName = "card-default", filters = {} }) => {
  const [cardsData, setCardsData] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]);
  

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const fetches = await Promise.all(
          setQueries.map((q) =>
          fetch(`${BASE_URL}/cards?q=${q}`, { headers: API_HEADER }).then((res) => res.json())
        )
      );
                 
      const combinedData = fetches.flatMap((json) => json.data || []);
      setCardsData(combinedData);
      setFilteredCards(combinedData);
    } catch (error) {
      console.error("Failed to fetch card data:", error);
    }
  }

  fetchCards();
  }, [setQueries]);

  useEffect(() => {
  if (!cardsData.length) return

  let updated = [...cardsData];

  if (filters.cardtype) {
    updated = updated.filter(card => card.supertype === filters.cardtype);
  }

  if (filters.subtypes) {
    updated = updated.filter(card => card.subtypes?.includes(filters.subtypes));
  }

  if (filters.energytypes) {
    updated = updated.filter(card => card.types?.includes(filters.energytypes));
  }

  if (filters.rarity) {
    updated = updated.filter(card => card.rarity === filters.rarity);
  }

  if (filters.priceType && filters.priceRange) {
  const priceType = filters.priceType;
  const priceField = filters.priceRange === "low to high" ? "low" : "high";

  updated = updated.filter(card =>
    typeof card.tcgplayer?.prices?.[priceType]?.[priceField] === "number"
  );

  updated.sort((a, b) => {
    const aPrice = a.tcgplayer.prices[priceType][priceField];
    const bPrice = b.tcgplayer.prices[priceType][priceField];

    return filters.priceRange === "low to high"
      ? aPrice - bPrice
      : bPrice - aPrice;
  });
}
  
  setFilteredCards(updated);
}, [cardsData, filters]);

  const getFormattedPrices = (prices) => {
    if (!prices) return "<p>No price data</p>";
    const types = ["normal", "reverseHolofoil", "holofoil"];
    return types
      .map((type) => {
        const price = prices[type];
        return price
          ? `<p><strong>${type}:</strong> $${price.low ?? "?"} - $${price.high ?? "?"}</p>`
          : "";
      })
      .join("");
  };

  const getMarketPrice = (card) => {
    const priceType = ["normal", "reverseHolofoil", "holofoil"];
    for (const type of priceType) {
      const price = card.tcgplayer?.prices?.[type]?.market;
      if (typeof price === "number") return price
    }
    return "price not found"
  };

  return (
    <div>
      <div className="dfix space colu pad">
        <div className="input-solo input-m-r pad">
          {SearchbarAll && <SearchbarAll cardsData={cardsData} onFilter={setFilteredCards} />}
        </div>
        <div className="input-all input-m-r pad">
        { SearchbarSolo && <SearchbarSolo /> }
        </div>
      </div>

      <div id="card-container">
          {filteredCards.length > 0 ? (
            filteredCards.map((card) => (
              <div className={cardClassName} key={card.id}>
                <div key={card.id}>
                  <h3>{card.name}</h3>
                  <p><strong>Supertype:</strong> {card.supertype}</p>
                  <Link to={`/card/${card.id}`}>
                  <img src={card.images?.small} alt={card.name} />
                  </Link>
                  <p><strong>ID:</strong> {card.id}</p>
                  <p><strong>Type:</strong> {card.types?.join(", ")}</p>
                  <p><strong>Rarity:</strong> {card.rarity}</p>
                  <p><strong>Set:</strong> {card.set?.name}</p>
                  <div dangerouslySetInnerHTML={{ __html: getFormattedPrices(card.tcgplayer?.prices) }} />
                </div>
              </div>
            ))
         ) : cardsData.length > 0 ? (
            <h1>No cards match the selected filters.</h1>
          ) : (
            <h1>Loading cards...</h1>
          )}
      </div>
    </div>
  );
};

export default Display;
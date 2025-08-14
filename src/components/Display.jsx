import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TUCards from "../utils/team-up.json";
import TUPrice from "../utils/tu-prices.json";
import UBCards from "../utils/unbroken-bonds.json";
import UBPrice from "../utils/ub-prices.json";

const dataSets = {
  TeamUp: { cards: TUCards, prices: TUPrice },
  UnbrokenBonds: { cards: UBCards, prices: UBPrice },
};

const Display = ({
  setName = "TeamUp",
  SearchbarAll,
  cardClassName = "card-default",
  filters = {},
  searchTerm = "",
  onSearchChange = () => {},
}) => {
  const [cardsData, setCardsData] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]);

  useEffect(() => {
    if (!setName || !dataSets[setName]) {
      setCardsData([]);
      setFilteredCards([]);
      return;
    }

    const { cards, prices } = dataSets[setName];

    const priceMap = {};
    prices.forEach((priceItem) => {
      const cardId = Object.keys(priceItem).find((k) => k !== "");
      if (cardId) {
        priceMap[cardId] = priceItem[cardId];
      }
    });

    const merged = cards.map((card) => ({
      ...card,
      prices: priceMap[card.id] || {},
    }));

    setCardsData(merged);
    setFilteredCards(merged);
  }, [setName]);

  useEffect(() => {
    if (!cardsData.length) return;

    let updated = [...cardsData];

    if (filters.cardtype) {
      updated = updated.filter(card => card.supertype === filters.cardtype);
    }

    if (filters.subtypes?.length > 0) {
      updated = updated.filter(card =>
        card.subtypes?.some(st => filters.subtypes.includes(st))
      );
    }

    if (filters.energytypes?.length > 0) {
      updated = updated.filter(card =>
        card.types?.some(type => filters.energytypes.includes(type))
      );
    }

    if (filters.rarity?.length > 0) {
      updated = updated.filter(card => filters.rarity.includes(card.rarity));
    }

    if (filters.priceType && filters.priceRange) {

  const priceType = filters.priceType;
  const priceField = filters.priceRange === "low to high" ? "low" : "high";

  updated = updated.filter(card => {
    const val = card.prices?.[priceType]?.[priceField];
    return typeof val === "number";
  });

  updated.sort((a, b) => {
    const aPrice = a.prices[priceType][priceField];
    const bPrice = b.prices[priceType][priceField];
    return filters.priceRange === "low to high" ? aPrice - bPrice : bPrice - aPrice;
  });
    }

    if (searchTerm?.trim().length >= 2) {
      const filterUpper = searchTerm.toUpperCase();
      updated = updated.filter(
        card =>
          card.name?.toUpperCase().includes(filterUpper) ||
          card.id?.toUpperCase().includes(filterUpper) ||
          card.supertype?.toUpperCase().includes(filterUpper) ||
          card.types?.some(type => type.toUpperCase().includes(filterUpper)) ||
          card.rarity?.toUpperCase().includes(filterUpper)
      );
    }

    setFilteredCards(updated);
  }, [cardsData, filters, searchTerm]);

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

  const classNameMap = {
   TeamUp: "selectTUs",
    UnbrokenBonds: "selectUBs",
  }
  const Barcolor = classNameMap[setName] || "";

  return (
    <div>
      <div className="dfix space colu pad">
        <div className="input-all input-m-r pad">
          {SearchbarAll && (
            <SearchbarAll
              searchTerm={searchTerm}
              onSearchChange={onSearchChange}
              className={Barcolor}
              cardsData={cardsData}
            />
          )}
        </div>
      </div>

      <div id="card-container">
        {filteredCards.length > 0 ? (
          filteredCards.map((card) => (
            <div className={cardClassName} key={card.id}>
              <div>
                <h3>{card.name}</h3>
                <p><strong>Supertype:</strong> {card.supertype}</p>
                <Link to={`/cards/${card.id}`}>
                  <img src={card.images?.small} alt={card.name} />
                </Link>
                <p><strong>ID:</strong> {card.id}</p>
                <p><strong>Type:</strong> {card.types?.join(", ")}</p>
                <p><strong>Rarity:</strong> {card.rarity}</p>
                <p><strong>Set:</strong> {card.set?.name}</p>
                <div
                  dangerouslySetInnerHTML={{ __html: getFormattedPrices(card.prices) }}
                />
                <p><strong>Last Price Updated:</strong> 08/11/2025</p>
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
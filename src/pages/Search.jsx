
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { API_HEADER, BASE_URL } from '../utils/fetchfromApi';

const Search = () => {
  const { searchTerm } = useParams();
  const [cardsData, setCardsData] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${BASE_URL}/cards`, { headers: API_HEADER });
        const data = await response.json();
        setCardsData(data.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch data');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (!searchTerm) return;

    const filtered = cardsData.filter(card => {
      return (
        card.name.toUpperCase().includes(searchTerm.toUpperCase()) ||
        card.id.toUpperCase().includes(searchTerm.toUpperCase()) ||
        card.supertype.toUpperCase().includes(searchTerm.toUpperCase()) ||
        (card.types && card.types.some(type => type.toUpperCase().includes(searchTerm.toUpperCase()))) ||
        (card.rarity && card.rarity.toUpperCase().includes(searchTerm.toUpperCase()))
      );
    });
    setFilteredCards(filtered);
  }, [searchTerm, cardsData]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Oof the API has been used up for now or an Error has occurred.</p>;
  }

  return (
    <div>
      <h1>Search Results</h1>
      {filteredCards.length > 0 ? (
        filteredCards.map((card, index) => (
          <div key={index}>
            <h3>{card.name}</h3>
            { }
          </div>
        ))
      ) : (
        <p>No results found</p>
      )}
    </div>
  );
};

export default Search;
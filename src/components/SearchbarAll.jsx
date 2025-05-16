import { useState, useEffect } from 'react';

const SearchbarAll = ({ cardsData, onFilter, className='' }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => setSearchTerm(e.target.value);

  useEffect(() => {
    if (!cardsData || !Array.isArray(cardsData)) return;

    if (!searchTerm || searchTerm.length < 2) {
      onFilter(cardsData);
      return;
    }

    const filter = searchTerm.toUpperCase();
    const filtered = cardsData.filter(card => (
      card.name?.toUpperCase().includes(filter) ||
      card.id?.toUpperCase().includes(filter) ||
      card.supertype?.toUpperCase().includes(filter) ||
      (card.types && card.types.some(type => type.toUpperCase().includes(filter))) ||
      (card.rarity && card.rarity.toUpperCase().includes(filter))
    ));
    onFilter(filtered);
  }, [searchTerm, cardsData, onFilter]);

  return (
    <form onSubmit={(e) => e.preventDefault()} autoComplete='off'>
      <input 
        name='search-field'
        autoComplete='off'
        id="searchBar" 
        placeholder="Search all within the set" 
        type="text"
        value={searchTerm}
        onChange={handleChange}
        className={className}
      />
    </form>
  );
};

export default SearchbarAll;
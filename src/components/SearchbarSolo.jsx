import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { API_HEADER, BASE_URL } from '../utils/fetchfromApi';

const SearchbarSolo = ({ className = '', setId}) => {
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState('')

  const handleSubmit = async (e) => {
  e.preventDefault();
  const trimmed = searchTerm.trim();

  if (trimmed) {
    try {
      const nameQuery = `name:"${encodeURIComponent(trimmed)}"`;
      const res = await fetch(`${BASE_URL}/cards?q=${nameQuery}`, { headers: API_HEADER });
      const data = await res.json();
      const allMatches = data.data;

      const allowedSetIds = Array.isArray(setId) ? setId : [setId];

      const foundCard = allMatches.find(card => allowedSetIds.includes(card.set.id));

      if (foundCard) {
        navigate(`/card/${foundCard.id}`);
      } else {
        alert(`Card "${trimmed}" not found in set ${allowedSetIds.join(', ')}.`);
      }
    } catch (err) {
      console.error("Search error:", err);
      alert("There was an error searching. Try again.");
    }
  }
};
  return (
    <form onSubmit={handleSubmit} autoComplete='off'>
        <input 
          name='search-field'
          autoComplete='off'
          id="searchBar" 
          placeholder="Search by exact name" 
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={className}
        />
    </form>
  )
}
export default SearchbarSolo
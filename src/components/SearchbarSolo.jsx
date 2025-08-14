import { useState } from 'react'

const SearchbarSolo = ({ className = '',}) => {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSubmit = (e) => {e.preventDefault() }

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
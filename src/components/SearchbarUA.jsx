import { useState } from 'react'

const SearchbarUA = () => {

    const [searchTerm, setSearchTerm] = useState('')

    const handleSubmit = (e) => {
    e.preventDefault();

    };

    return (
        <form onSubmit={handleSubmit} autoComplete='off'>
            <input 
                name='search-field'
                autoComplete='off'
                id="searchBar" 
                placeholder="Search all within the set" 
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="selectUBs"
            />
        </form>
    )
}
export default SearchbarUA
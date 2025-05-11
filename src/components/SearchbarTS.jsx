import { useState } from 'react'
import { useNavigate } from "react-router-dom";

const SearchbarTS = () => {

    const navigate = useNavigate()
    const [searchTerm, setSearchTerm] = useState('')

    const handleSubmit = (e) => {
    e.preventDefault();

    navigate(`/search/${searchTerm}`);
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
                className="selectTUs"
            />
        </form>
    )
}
export default SearchbarTS
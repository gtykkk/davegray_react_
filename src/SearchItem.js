const SearchItem = ({ search, setSearch, handleSearch }) => {
    return (
        <form className="searchForm" onSubmit={handleSearch}>
            <label htmlFor="search">Search</label>
            <input
                id="search" 
                type="text"
                role="searchbox"
                placeholder="Search Items"
                value={search}
                onChange={(e) => setSearch(e.target.value) }
            />
        </form>
    )
}

export default SearchItem

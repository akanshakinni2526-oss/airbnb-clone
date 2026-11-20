function SearchBar() {
  return (
    <div className="search-bar">
      <div className="search-item">
        <label>Location</label>
        <input type="text" placeholder="Where are you going?" />
      </div>

      <div className="search-item">
        <label>Check in</label>
        <input type="date" />
      </div>

      <div className="search-item">
        <label>Check out</label>
        <input type="date" />
      </div>

      <div className="search-item">
        <label>Guests</label>
        <input type="number" placeholder="Guests" min="1" />
      </div>

      <button className="search-button">
        Search
      </button>
    </div>
  );
}

export default SearchBar;
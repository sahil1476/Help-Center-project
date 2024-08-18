
import React, { useState } from "react";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Searchbox({ setIsSearchFocused }) {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  function handleChange(event) {
    setSearchQuery(event.target.value);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setIsSearchFocused(true);

    try {
      const response = await axios.get(`http://localhost:3001/cards/${searchQuery}`);
      navigate('/search-results', { state: { cards: response.data, query: searchQuery } });
    } catch (error) {
      console.error('Error fetching card:', error);
      navigate('/search-results', { state: { cards: [], query: searchQuery } });
    }
  }

  return (
    <div className="search-box">
      <div className="search-text">
        <h1>How can we help?</h1>
      </div>

      <form className="search-input" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={handleChange}
        />
        <button type="submit"><ArrowForwardIcon /></button>
      </form>
    </div>
  );
}

export default Searchbox;

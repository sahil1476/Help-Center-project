import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';

function SearchResults() {
  const location = useLocation();
  const navigate = useNavigate();
  const { cards, query } = location.state || { cards: [], query: '' };

  function handleClear() {
    navigate('/');
  }

  return (
    <div className="search-container">
      <div className="search-header">
        <h2>Search results for: {query}</h2>
        <button type="button" onClick={handleClear} className="clear-btn">
          <CloseIcon />
        </button>
      </div>
      {cards.length > 0 ? (
        cards.map(card => (
          <div key={card.id} className="card">
            <div className="content">
              <h1>{card.title}</h1>
              <div className="line"></div>
              <p>{card.description}</p>
            </div>
          </div>
        ))
      ) : (
        <p>No cards found</p>
      )}
    </div>
  );
}

export default SearchResults;

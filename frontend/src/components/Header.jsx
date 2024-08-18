
import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import AnchorIcon from '@mui/icons-material/Anchor';

function Header() {
  return (
    <header>
      <div className="header-top">
        <h1>
          <button>
            <AnchorIcon /> 
          </button> 
          Abstract | Help Center
        </h1>
        <Link to="/submit-request">
          <button className="header-btn">Submit a Request</button>
        </Link>
      </div>
    </header>
  );
}

export default Header;

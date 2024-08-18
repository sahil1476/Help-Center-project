import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Searchbox from './components/Searchbox';
import Card from './components/Card';
import Footer from './components/Footer';
import SubmitRequestForm from './components/SubmitRequestForm';
import { useState } from 'react';
import SearchResults from './components/SearchResults';
import './App.css';

function App() {

  const [isSearchFocused, setIsSearchFocused] = useState(false);

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
               <Searchbox  setIsSearchFocused={setIsSearchFocused}/>
               <Card />
               {/* {!isSearchFocused && <Card />} */}
            </>
        } />

        <Route path="/submit-request" 
           element={<SubmitRequestForm />
        } />

        <Route path="/search-results" 
             element={<SearchResults />} 
        />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;


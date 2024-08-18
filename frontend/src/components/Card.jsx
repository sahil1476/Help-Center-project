import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";

function Card(){
   
    const [cards, setCards] = useState([]);

    useEffect(() => {
        async function fetchCards() {
          try {
            const response = await axios.get('http://localhost:3001/showCards');
            setCards(response.data);
          } catch (error) {
            console.error('Error fetching cards:', error);
          }
        }
    
        fetchCards();
      }, []);

    return (
        <div className="card-container">
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
        <p>No cards available</p>
      )}
        </div>
    );
}

export default Card;
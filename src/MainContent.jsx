import React from 'react';
import './MainContent.css';

// Importing images directly
import image1 from './assets/image1.png';
import image2 from './assets/image2.png';
import image3 from './assets/image3.png';
import image4 from './assets/image4.png';
import image5 from './assets/image5.png';
import image6 from './assets/image6.png';

function MainContent() {
  // Array of restaurant data with imported image paths
  const restaurantData = [
    {
      name: "Hogis Restaurant",
      address: "Marian road, Calabar",
      image: image1,
    },
    {
      name: "Foodie Palace",
      address: "Marian road, Calabar",
      image: image2,
    },
    {
      name: "Taste Hub",
      address: "Main Street, Abuja",
      image: image3,
    },
    {
      name: "The Grill Spot",
      address: "Main Street, Abuja",
      image: image4,
    },
    {
      name: "Dine & Wine",
      address: "Marian road, Calabar",
      image: image5,
    },
    {
      name: "Urban Bites",
      address: "Marian road, Calabar",
      image: image6,
    },
    
  ];

  return (
    <main className="main-content">
      <header className="main-header">
        <h2>Let's do your best today 🚀</h2>
        <p className="date">December 18, 2023</p>
      </header>
      <div className="filters">
        <button className="filter-button active">
          <span className='filter-icon'>⭐</span>
          <div className='filter-content'>
           <span className='filter-text'>Casual dining</span>
           <span className='filter-subtext'>12 Places</span> 
          </div>
        </button>

        <button className="filter-button">
          <span class="filter-icon">🌮</span>
          <div className='filter-content'>
           <span class="filter-text">Food trucks</span>
           <span class="filter-subtext">12 Places</span>
          </div>
        </button>

      </div>
      <div className="restaurant-grid">
        {restaurantData.map((restaurant, index) => (
          <div key={index} className="restaurant-card">
            <img src={restaurant.image} alt={restaurant.name} />
            <div className="restaurant-details">
              <h3>{restaurant.name}</h3>
              <p>{restaurant.address}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default MainContent;

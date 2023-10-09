import React from 'react';
import './Home.css';
import Product from './Product'; 
import './Productos.css';
import axios from 'axios';
import { useState, useEffect } from 'react';


function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
    .get('https://dummyjson.com/products')
    .then((response) => {
      setProducts(response.data.products);
    })
    .catch((error) => {
      console.error('Error fetching data from API:', error);
    });
  }, []);

  const limitar6 = products.slice(0, 6);

  return (
    <div className="home-container">
      <div id="homeCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`carousel-item ${index === 0 ? 'active' : ''}`}
            >
              <img
                src={product.thumbnail}
                className="d-block w-100 carousel-image"
                alt={product.title}
              />
            </div>
          ))}
        </div>
        <a
          className="carousel-control-prev"
          href="#homeCarousel"
          role="button"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#homeCarousel"
          role="button"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </a>
      </div>

      <div className="product-grid">
        {limitar6.map((product, index) => (
          <Product
            key={index}
            title={product.title}
            image={product.thumbnail}
          />
        ))}
      </div>
    </div>

    
  );
}

export default Home;

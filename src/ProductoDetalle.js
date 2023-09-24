import React, { useState } from 'react';
import './ProductoDetalle.css'; // Create a CSS file for styling

function ProductoDetalle() {
  const [name, setName] = useState('Rick The Month');
  const [description, setDescription] = useState('The greatest duck in existence');
  const [price, setPrice] = useState(10.99); // Set an initial price

  return (
    <div className="product-detail-container">
      <div className="product-detail-card">
        <img
          src="https://i.kym-cdn.com/photos/images/original/001/367/150/539.jpg" 
          alt={name}
          className="product-detail-image"
        />
        <div className="product-detail-content">
          <h1 className="product-detail-title">{name}</h1>
          <h4 className="product-detail-description">{description}</h4>
          <p className="product-detail-price">Price: ${price}</p>

          {/* You can add more details here */}
          <ul className="product-detail-details">
            <li>Size: Large</li>
            <li>Color: Yellow</li>
            {/* Add more details as needed */}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProductoDetalle;
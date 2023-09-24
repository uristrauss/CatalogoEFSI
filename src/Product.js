import React from 'react';
import { Link } from 'react-router-dom';

function Product(props) {
  const { title, image, description, price } = props;
  return (
    <div className="product">
      <img src={image} alt={title} className="product-image" />
      <p>

      </p>
      <h4 className="product-title">{title}</h4>
    </div>
  );
}

export default Product;

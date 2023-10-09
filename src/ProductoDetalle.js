import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ProductoDetalle.css'; 
import axios from 'axios';


function ProductoDetalle() {
  const { productId } = useParams(); 
  const [productoDetalle, setProductoDetalle] = useState(null);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${productId}`)
      .then((response) => {
        setProductoDetalle(response.data);
      })
      .catch((error) => {
        console.error('Error fetching product details from API:', error);
      });
  }, [productId]);

  if (!productoDetalle) {
    return <div>Cargando...</div>; 
  }
  return (
    <div className="product-detail-container">
      <div className="product-detail-card">
        <img
          src={productoDetalle.thumbnail}
          alt={productoDetalle.title}
          className="product-detail-image"
        />
        <h2 className="product-detail-title">{productoDetalle.title}</h2>
        <p className="product-detail-description">{productoDetalle.description}</p>
        <p className="product-detail-price">$ {productoDetalle.price}</p>
        <p className="product-detail-brand">Brand: {productoDetalle.brand}</p>
      </div>
    </div>
  );
}

export default ProductoDetalle;

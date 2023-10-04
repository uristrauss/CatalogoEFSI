import React, { useState } from 'react';
/*import './ProductoDetalle.css'; */
import { useProduto } from './contextProductos';


/*
function ProductoDetalle(){
  const {productoData}  = useProduto();

  if (!productoData){
    return <div>Cargando...</div>;
  }



  return (
    <div>
      <h2>{productoData.name}</h2>
      
    </div>
  )
}

*/

function ProductoDetalle() {
  const [name, setName] = useState('Rick The Month');
  const [description, setDescription] = useState('The greatest duck in existence');
  const [price, setPrice] = useState(13.13); 

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

          <ul className="product-detail-details">
            <li>Size: Large</li>
            <li>Color: Yellow</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProductoDetalle;

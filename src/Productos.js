import React, { useState, useEffect } from 'react';
import Product from './Product'; 
import './Productos.css';
import axios from 'axios';
import { Link } from 'react-router-dom';


function Productos() {
  const [searchQuery, setSearchQuery] = useState('');
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    axios
    .get('https://dummyjson.com/products')
    .then((response) => {
      setProducts(response.data.products);
      setFilteredProducts(response.data.products);
    })
    .catch((error) => {
      console.error('Error fetching data from API:', error);
    });
  }, []);


  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(query)
    );
    setFilteredProducts(filtered);
  };

  return (
    <div className="product-grid">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Buscar por nombre..."
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>

      {filteredProducts.map((product, index) => (
        <div key={index}>
          <Link to={`/productos/${product.id}`}> 
            <Product
              title={product.title}
              image={product.thumbnail}
            />
          </Link>
        </div>
      ))}

    </div>
  );
}

export default Productos;

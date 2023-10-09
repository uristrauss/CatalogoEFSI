import React, { useState, useEffect } from 'react';
import Product from './Product'; 
import './Productos.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';

function Productos() {
  const [searchQuery, setSearchQuery] = useState('');
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('todos');

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
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

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
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

      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Filtrar por categoría
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item onClick={() => handleCategoryChange('todos')}>Todos</Dropdown.Item>
          <Dropdown.Item onClick={() => handleCategoryChange('smartphones')}>Smartphones</Dropdown.Item>
          <Dropdown.Item onClick={() => handleCategoryChange('laptops')}>Laptops</Dropdown.Item>
          <Dropdown.Item onClick={() => handleCategoryChange('fragrances')}>Fragrances</Dropdown.Item>
          <Dropdown.Item onClick={() => handleCategoryChange('skincare')}>Skincare</Dropdown.Item>
          <Dropdown.Item onClick={() => handleCategoryChange('groceries')}>Groceries</Dropdown.Item>
          <Dropdown.Item onClick={() => handleCategoryChange('home-decoration')}>Home-decoration</Dropdown.Item>
          <Dropdown.Item onClick={() => handleCategoryChange('furniture')}>furniture</Dropdown.Item>
          <Dropdown.Item onClick={() => handleCategoryChange('tops')}>tops</Dropdown.Item>
          <Dropdown.Item onClick={() => handleCategoryChange('womens-dresses')}>womens-dresses</Dropdown.Item>
          <Dropdown.Item onClick={() => handleCategoryChange('womens-shoes')}>womens-shoes</Dropdown.Item>
          <Dropdown.Item onClick={() => handleCategoryChange('mens-shirts')}>mens-shirts</Dropdown.Item>
          <Dropdown.Item onClick={() => handleCategoryChange('mens-shoes')}>mens-shoes</Dropdown.Item>
          <Dropdown.Item onClick={() => handleCategoryChange('mens-watches')}>mens-watches</Dropdown.Item>
          <Dropdown.Item onClick={() => handleCategoryChange('womens-watches')}>womens-watches</Dropdown.Item>
          <Dropdown.Item onClick={() => handleCategoryChange('womens-bags')}>womens-bags</Dropdown.Item>
          <Dropdown.Item onClick={() => handleCategoryChange('womens-jewellery')}>womens-jewellery</Dropdown.Item>
          <Dropdown.Item onClick={() => handleCategoryChange('sunglasses')}>sunglasses</Dropdown.Item>
          <Dropdown.Item onClick={() => handleCategoryChange('automotive')}>automotive</Dropdown.Item>
          <Dropdown.Item onClick={() => handleCategoryChange('motorcycle')}>motorcycle</Dropdown.Item>
          <Dropdown.Item onClick={() => handleCategoryChange('lighting')}>lighting</Dropdown.Item>   
        </Dropdown.Menu>
      </Dropdown>

      {filteredProducts
        .filter(product => selectedCategory === 'todos' || product.category === selectedCategory)
        .map((product) => (
          <div key={product.id}>
            <Link to={`/productos/${product.id}`}> 
              <Product
                title={product.title}
                image={product.thumbnail}
              />
            </Link>
          </div>
        ))
      }
    </div>
  );
}

export default Productos;

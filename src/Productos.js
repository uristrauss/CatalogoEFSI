import React from 'react';
import Product from './Product'; 
import './Productos.css';
import { useState } from 'react';


const products = [
  {
    title: 'Dancing Boy',
    image: 'https://www.lavanguardia.com/files/og_thumbnail/uploads/2021/06/07/60be17e39ecfa.jpeg',
  },
  {
    title: 'The Shining',
    image: 'https://thumbs.dreamstime.com/z/nataci%C3%B3n-en-patos-de-dibujos-animados-un-simple-y-lindo-animal-pato-aislado-fondo-azul-del-cielo-ilustraci%C3%B3n-vectorial-225495354.jpg', 
  },
  {
    title: 'Barto Muslo',
    image: 'https://hips.hearstapps.com/hmg-prod/images/pato-domald-disney-1591634526.jpg?crop=1xw:0.9971590909090909xh;center,top',
  },
  {
    title: 'Malibu Coco',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY5VXyt5bw_-Vh_2KOVOV1jyyQRsTs2GClgQ&usqp=CAU',
  },
  {
    title: 'Dancing Duck',
    image: 'https://www.lavanguardia.com/files/og_thumbnail/uploads/2021/06/07/60be17e39ecfa.jpeg',
  },
  {
    title: 'Cute Cartoon Duck',
    image: 'https://thumbs.dreamstime.com/z/nataci%C3%B3n-en-patos-de-dibujos-animados-un-simple-y-lindo-animal-pato-aislado-fondo-azul-del-cielo-ilustraci%C3%B3n-vectorial-225495354.jpg',
  },
  {
    title: 'Funny Duckling',
    image: 'https://hips.hearstapps.com/hmg-prod/images/pato-domald-disney-1591634526.jpg?crop=1xw:0.9971590909090909xh;center,top',
  },
  {
    title: 'Happy Duck',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY5VXyt5bw_-Vh_2KOVOV1jyyQRsTs2GClgQ&usqp=CAU',
  },
  {
    title: 'Adorable Duck Family',
    image: 'https://c.ndtvimg.com/2023-06/iregfj68_the-yellow-ducks-are-18-metres-high_625x300_10_June_23.jpg',
  },
  {
    title: 'Quacking Beauty',
    image: 'https://i.natgeofe.com/k/327b01e8-be2e-4694-9ae9-ae7837bd8aea/mallard-male-swimming.jpg',
  },{
    title: 'Pelocun Bin',
    image: 'https://www.lavanguardia.com/files/og_thumbnail/uploads/2021/06/07/60be17e39ecfa.jpeg',
  },
  {
    title: 'Smooth',
    image: 'https://thumbs.dreamstime.com/z/nataci%C3%B3n-en-patos-de-dibujos-animados-un-simple-y-lindo-animal-pato-aislado-fondo-azul-del-cielo-ilustraci%C3%B3n-vectorial-225495354.jpg', 
  },
  {
    title: 'Carapela',
    image: 'https://hips.hearstapps.com/hmg-prod/images/pato-domald-disney-1591634526.jpg?crop=1xw:0.9971590909090909xh;center,top',
  },
  {
    title: 'Messi Carlos',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY5VXyt5bw_-Vh_2KOVOV1jyyQRsTs2GClgQ&usqp=CAU',
  },
  {
    title: 'Damian Mosgrabi',
    image: 'https://www.lavanguardia.com/files/og_thumbnail/uploads/2021/06/07/60be17e39ecfa.jpeg',
  },
  {
    title: 'Carlos Pagni',
    image: 'https://thumbs.dreamstime.com/z/nataci%C3%B3n-en-patos-de-dibujos-animados-un-simple-y-lindo-animal-pato-aislado-fondo-azul-del-cielo-ilustraci%C3%B3n-vectorial-225495354.jpg',
  },
  {
    title: 'Massa Sergi',
    image: 'https://hips.hearstapps.com/hmg-prod/images/pato-domald-disney-1591634526.jpg?crop=1xw:0.9971590909090909xh;center,top',
  },
  {
    title: 'Milei Lion',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY5VXyt5bw_-Vh_2KOVOV1jyyQRsTs2GClgQ&usqp=CAU',
  },
  {
    title: 'Bull Market',
    image: 'https://c.ndtvimg.com/2023-06/iregfj68_the-yellow-ducks-are-18-metres-high_625x300_10_June_23.jpg',
  },
  {
    title: 'Rich The Month',
    image: 'https://i.natgeofe.com/k/327b01e8-be2e-4694-9ae9-ae7837bd8aea/mallard-male-swimming.jpg',
  },
  {
    title: 'Babysitting',
    image: 'https://c.ndtvimg.com/2023-06/iregfj68_the-yellow-ducks-are-18-metres-high_625x300_10_June_23.jpg',
  }
];

function Productos() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);


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
        <Product
          key={index}
          title={product.title}
          image={product.image}
        />
      ))}
    </div>
  );
}

export default Productos;

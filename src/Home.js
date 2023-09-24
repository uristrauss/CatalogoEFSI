import React from 'react';
import './Home.css';
import Product from './Product'; 
import './Productos.css';

const products = [
  {
    title: 'Boat DUCK',
    image: 'https://ewscripps.brightspotcdn.com/dims4/default/3dcac43/2147483647/strip/true/crop/1800x1013+0+94/resize/1280x720!/quality/90/?url=http%3A%2F%2Fewscripps-brightspot.s3.amazonaws.com%2F58%2F5c%2F4612bdb94b19aa1c73d1db8c965d%2Fduck-in-iowa.jpg',
  },
  {
    title: 'Skyline DUCK',
    image: 'https://assets3.cbsnewsstatic.com/hub/i/r/2023/07/18/a2417a31-64e2-40df-b57c-601c05b2889f/thumbnail/1200x630/d43121b5c1b20e96da93c2f740334f5b/gettyimages-813726004.jpg?v=f5251b37272e6b1bc4e5456ab4445a67', 
  },
  {
    title: 'Twin DUCK',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-0uYEQcFtGGRexYL0KSjXcUQfCIjuXo6xYsQGfqBlXiaaD-7pzGVAj30RNuLoOed-r4s&usqp=CAU',
  },
  {
    title: 'KissWar DUCK',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO64sElX3cYjEaHfd4ZO0woxJ9HoFWXTxfVCZxtOkRS-fgiu-cS0NyM2OPIVuFE1p9Bus&usqp=CAU',
  },
  {
    title: 'Bubble DUCK',
    image: 'https://c.ndtvimg.com/2023-06/iregfj68_the-yellow-ducks-are-18-metres-high_625x300_10_June_23.jpg',
  },
  {
    title: 'Chinese DUCK',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3mvmybXGz5qMdz6vvBIB0UXx4YjgpUoTHqllA-4Nu6sn8bXMBhhzxw45rbXCI_OOSPqc&usqp=CAU',
  }
];

function Home() {
  return (
    <div className="home-container">
      <div id="homeCarousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://images.birdfact.com/production/where-do-ducks-sleep.jpg?w=1200&h=900&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1657039243&s=3f1bcf88d22606d42c57ae18ac7408c6"
            className="d-block w-100 carousel-image"
            alt="Duck 1"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://fox4kc.com/wp-content/uploads/sites/16/2023/06/Worlds-Largest-Rubber-Duck.jpg?w=661"
            className="d-block w-100 carousel-image"
            alt="Duck 2"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://static.displate.com/857x1200/displate/2023-06-01/626594b4b6b7b8661ef2c5f6bb3d2e93_5a8c532028def1693013b63d51f42603.jpg"
            className="d-block w-100 carousel-image"
            alt="Duck 3"
          />
        </div>
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
        {products.map((product, index) => (
          <Product
            key={index}
            title={product.title}
            image={product.image}
          />
        ))}
      </div>
    </div>

    
  );
}

export default Home;

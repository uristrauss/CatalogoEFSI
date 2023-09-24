import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout.js";
import Home from "./Home.js";
import Productos from "./Productos.js";
import ProductoDetalle from "./ProductoDetalle.js";



const App = () => {
  return (
    <BrowserRouter>
      <Layout> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Productos" element={<Productos />} />
          <Route path="/ProductoDetalle" element={<ProductoDetalle />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;

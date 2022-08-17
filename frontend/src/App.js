
import './App.css';
import Home from './pages/Home';
import Product from './pages/product';
import ProductDetail from './pages/productDetail';
import Login from './pages/Login';
import Register from './pages/Register';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <div className="container">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product-detail/:slug" element={<ProductDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/collection/:slug" element={<Product />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;

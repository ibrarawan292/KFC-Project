import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Product from './pages/Product';
import Order from './pages/Order';

function App() {
  return (
  
    <BrowserRouter>
    <Header/>
    <div className="container-fluid">
      <div className="row">
      <Routes>
      <Route path="/" element={<Login />}/>
      <Route path="/home" element={<Home />}/>
      <Route path="/products" element={<Product/>}/>
      <Route path="/orders" element={<Order/>}/>
    </Routes>
      </div>
    </div>
    
  </BrowserRouter>
    
  );
}

export default App;

import './App.css'
import Home from './components/home'
import About from './components/about'
import SendEmail from './components/sendemail'
import Products from './components/products'
import ProductDetails from './components/productdetails'

import { Navigate, Routes, Route, NavLink } from 'react-router';

function App() {

  return (
    <div className="App">
      <h3>React Router App</h3>
      <nav>
        <NavLink to="/home">Home</NavLink>&nbsp;
        <NavLink to="/about">About</NavLink><br />
        <NavLink to='/send-email?name=John&email=mark@abc.com'>Send Email</NavLink><br />
        <NavLink to='/products'>Products</NavLink><br />
        <NavLink to='/details'>Details</NavLink><br />
      </nav>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/send-email" element={<SendEmail />} />
        <Route path="/products" element={<Products />} />
        <Route path="/details/:name" element={<ProductDetails />} />
      </Routes>

    </div>
  );
}

export default App

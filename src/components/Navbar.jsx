import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link className="logo2" to="/"><h2 className="logo">PeakyShop</h2></Link> 
      <div className="leftSide">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>  
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <div className="links">
        <Link to="/">Shop</Link>
        <Link to="/cart">
          <ShoppingCart size={32} />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

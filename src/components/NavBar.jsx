import React from 'react';
import "../App.css"
import { Link } from "react-router-dom";

const NavBar = () => {
 return (
   <div className="navbar">
     <div className="navbar-a">
       <Link to="/">
         <h1>React Books App</h1>
       </Link>
     </div>
     <div className="favorites-a">
       <Link to="/favorites">
         <h3>Your Favorites</h3>
       </Link>
     </div>
   </div>
 );
}

export default NavBar
import React from "react";
import { Link } from 'react-router-dom';
import './NavBar.css'

const NavBar = () => {
    return (
      
      <div className="sidebar-fixed">
        <div className="right-nav">
          <ul>
            <li>
              <Link to="/" >Home</Link>
            </li>
            <li>
              <Link to="/weather">weather</Link>
            </li>
            
          </ul>
        </div>
      </div>
    );
};

export default NavBar;

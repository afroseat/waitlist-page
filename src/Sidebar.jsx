import React, { useState } from "react";
import "./Sidebar.css";
import restaurants1 from "./assets/restaurants1.png";
import logo3 from './assets/logo3.png';
import restaurants from './assets/restaurants.png';
import message from "./assets/message.png";
import chefs from "./assets/chefs.png";
import grocery from "./assets/grocery.png";
import cart from "./assets/cart.png";
import setting from "./assets/setting.png";
import help from "./assets/help.png";
import userAvatar from "./assets/avatar1.png";

function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <aside className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
        <div className="menu-frame">
    
      {/* Menu Button */}
      <button className="menu-button" onClick={toggleSidebar}>
        ☰
      </button>
      {/* Logo Section */}
      <div className="sidebar-logo">
          <img src={logo3} alt="AfroEat Logo" />
       </div>

       </div>

      {/* Sidebar Content */}
      <div className="sidebar-content">

        {/* Menu Section */}
        <nav className="sidebar-menu">
          <ul>
            <li className="active">
              <img src={restaurants1} alt="Restaurants" className="icon-image-active" />
              <span>Restaurants</span>
            </li>
            <li>
              <img src={message} alt="Message" className="icon-image" />
              <span>Message</span>
            </li>
            <li>
              <img src={chefs} alt="Chefs" className="icon-image" />
              <span>Chefs</span>
            </li>
            <li>
              <img src={grocery} alt="Grocery Store" className="icon-image" />
              <span>Grocery Store</span>
            </li>
            <li>
              <img src={cart} alt="Cart" className="icon-image" />
              <span>Cart</span>
            </li>
            <li>
              <img src={setting} alt="Settings" className="icon-image" />
              <span>Settings</span>
            </li>
            <li>
              <img src={help} alt="Help Center" className="icon-image" />
              <span>Help Center</span>
            </li>
          </ul>
        </nav>
      </div>

        {/* Footer Section */}
        <div className="sidebar-footer">
          <img src={userAvatar} alt="User Avatar" className="user-avatar" />
          <div className="user-info">
            <p className="user-name">Leonard B.</p>
            <span className="user-role">Manager</span>
          </div>
          <span class="down-arrow">&#9660;</span>
        </div>
    </aside>
  );
}

export default Sidebar;

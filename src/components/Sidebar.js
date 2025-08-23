/*

import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : 'collapsed'}`}>
      <button className="toggle-btn" onClick={toggleSidebar}>☰</button>
      {isOpen && (
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/doctors">Doctors</Link></li>
          <li><Link to="/reviews">Reviews</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      )}
    </div>
  );
};

export default Sidebar;


*/


import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <nav style={{
      width: '200px',
      height: '100vh',
      background: '#f5f5f5',
      padding: '20px',
      boxSizing: 'border-box'
    }}>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/doctors">Doctors</Link></li>
        <li><Link to="/reviews">Reviews</Link></li>
        <li><Link to="/contacts">Contacts</Link></li>
      </ul>
    </nav>
  );
}

export default Sidebar;

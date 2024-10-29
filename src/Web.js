import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import { useAuth } from './Authentication'; 
import './Webpage.css';

function Web() {
  const { currentUser, logout } = useAuth(); 
  const navigate = useNavigate();

  const handleLogout = async () => {
 
      navigate('/'); 
   
  };

  return (
    <div>
      <header>
        <h1 className='bar'>DEV@Deakin</h1>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/query">Query</Link></li>
          </ul>
        </nav>
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <button type="button">Search</button>

          
          {currentUser ? (
           <button onClick={handleLogout} className="log">Log Out</button> 
          
          
          ) : (
            <Link className="log" to="/signup">Sign Up</Link>
          )}
        </div>
      </header>
    </div>
  );
}

export default Web;

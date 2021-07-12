import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light sticky-top'>
      <div className='container-fluid'>
        <Link className='navbar-brand' to='/'>
          <h1 style={{ fontFamily: "'Noto Sans KR', sans-serif" }}>Team 24</h1>
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNavAltMarkup'
          aria-controls='navbarNavAltMarkup'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon' />
        </button>
        <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
          <div className='navbar-nav'>
            <Link className='nav-link' to='/job-research'>
              Job Research and Resources
            </Link>
            <Link className='nav-link' to='/financial-literacy'>
              Financial Literacy Resources
            </Link>
            <Link className='nav-link' to='savings-calculator'>
              Savings Calculator
            </Link>
            <Link className='nav-link' to='login'>
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

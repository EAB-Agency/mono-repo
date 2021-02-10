import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import eablogo from '../images/eab-logo-color.svg';
import Navigation from './navigation';
import '../styles/index.scss';

const Header = ({ title, locations }) => {
  const [pageUrl, setPage] = useState('landing');

  useEffect(() => {
    const url = window.location.href;
    if (url.includes('location') || url.includes('instructions')) {
      setPage('not-landing');
    } else {
      setPage('landing');
    }
  }, []);

  return (
    <header
      className="site_header"
      data-page-name={pageUrl === 'landing' ? 'landing-page' : 'location'}
    >
      <div className="eab_logo">
        <img src={eablogo} alt="EAB Global" />
        <div className="agency_services">Agency Services</div>
      </div>
      <div className="partner">
        <Link className="partner_name" to="/">
          {title}
        </Link>
      </div>
      <Navigation locations={locations} />
    </header>
  );
};

export default Header;

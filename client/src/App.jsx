// App.jsx

import React from 'react';
import './styles.css';
import LeftMenu from './LeftMenu';
import MainContent from './MainContent';
import Buttons from './Buttons';
import Navbar from './Navbar';

function App() {
  return (
    <div>
      <div className="header">
        <img className="imglogo" src="https://kitsw.ac.in/images/logo.jpg" alt="KITSW Logo" />
        <div className="header-centre-text">
          <h1>KAKATIYA INSTITUTE OF TECHNOLOGY &amp; SCIENCE</h1>
          <p>WARANGAL-506015, Telangana, INDIA.</p>
          <p><font color="yellow"><i>(An AUTONOMOUS INSTITUTE under KAKATIYA UNIVERSITY, Warangal)</i></font></p>
        </div>
        <Buttons />
      </div>
      <Navbar />
      <div className="content-container">
        <div className="left-menu-container">
          <LeftMenu />
        </div>
        <div className="main-content-container">
          <MainContent />
        </div>
      </div>
    </div>
  );
}

export default App;

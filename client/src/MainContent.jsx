import React from 'react';
import Carousel from './Carousel'; // Import the Carousel component

function MainContent() {
  return (
    <div className="grid_10" style={{ textAlign: 'justify', fontFamily: 'Trebuchet MS, Arial, Helvetica, sans-serif', fontSize: '14px' }}>
      <div style={{ color: '#F00', fontSize: '18px', fontWeight: 'bold', width: '800px', textAlign: 'center', margin: '10px 0px' }}>
        <p>About KITSW</p>
        {/* Replace the image with the Carousel component */}
        <Carousel />
      </div>
      {/* Main content goes here */}
    </div>
  );
}

export default MainContent;

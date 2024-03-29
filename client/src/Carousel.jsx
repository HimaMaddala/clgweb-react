import React from 'react';

function Carousel() {
  return (
    <div className="container">  
      <div id="myCarousel" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="item active">
            <img src="https://cle.iitb.ac.in/wp-content/uploads/2021/10/IIT-Mumbai-1.jpg" alt="Los Angeles" style={{width: '100%', height: '550px'}} />
            <div className="carousel-caption">
              <h3>Los Angeles</h3>
              <p>LA is always so much fun!</p>
            </div>
          </div>
          <div className="item">
            <img src="https://images.shiksha.com/mediadata/images/1488171142phpcUJ7yi.jpeg" alt="Chicago" style={{width: '100%', height: '550px'}} />
            <div className="carousel-caption">
              <h3>Chicago</h3>
              <p>Thank you, Chicago!</p>
            </div>
          </div>
          <div className="item">
            <img src="https://i.ytimg.com/vi/5AKFfv-HNHc/maxresdefault.jpg" alt="New york" style={{width: '100%', height: '550px'}} />
            <div className="carousel-caption">
              <h3>New York</h3>
              <p>We love the Big Apple!</p>
            </div>
          </div>
        </div>
        <a className="left carousel-control" href="#myCarousel" data-slide="prev">
          <span className="glyphicon glyphicon-chevron-left"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="right carousel-control" href="#myCarousel" data-slide="next">
          <span className="glyphicon glyphicon-chevron-right"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
}

export default Carousel;

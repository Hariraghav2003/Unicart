import React from 'react';

import './Carouselex.css'


import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div style={{ width: '80%', margin: 'auto' }}>
      <Slider {...settings} className='Carousel '>
      
        <div>
        <span style={{position:'absolute',top:50,left:1400,fontSize:30 }}>Gear up your lifestyle with <br></br>
          <span style={{fontFamily:'times new roman',fontSize:80,color:'red'}}>Unicart</span>  </span>
          <img src="../Carouselimageone.jpg" alt="Slide 2" style={{ width: '100%' }} />
        </div>
        <div>
          <img src="../Carouselimagetwo.jpg" alt="Slide 2" style={{ width: '100%' }} />
          <span style={{paddingLeft:480,fontSize:18}}>Get gadgets to improve your device</span>
        </div>
        <div>
          <img src="../Carouselimagethree.jpg" alt="Slide 2" style={{ width: '100%' }} />
          <span style={{paddingLeft:450,fontSize:18}}>Upgrade Your Home with Smart Living Essentials</span>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;

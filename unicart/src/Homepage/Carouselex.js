import React from 'react';
import './Carouselex.css';
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
    <div className='carouselone'>
      <Slider {...settings} className='Carousel '>
        <div>
          <span className="textone">Gear up your lifestyle with <br></br>
            <span className="texttwo">Unicart</span>  </span>
            <img src="../Carouselimageone.jpg" alt="Slide 2" style={{ width: '100%' }} />
          </div>
        <div>
          <img src="../Carouselimagetwo.jpg" alt="Slide 2" style={{ width: '100%' }} />
          <span className="textthree">Get gadgets to improve your device</span>
        </div>
        <div>
          <img src="../Carouselimagethree.jpg" alt="Slide 2" style={{ width: '100%' }} />
          <span className="textfour">Upgrade Your Home with Smart Living Essentials</span>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;

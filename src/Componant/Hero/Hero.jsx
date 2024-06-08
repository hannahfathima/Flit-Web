import React, { useEffect, useRef,  } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './Hero.scss';
import Navbar from '../Navbar/Navbar';

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    
    });
  }, []);
  const sliderRef = useRef(null);
  var settings = {
    dots: false,
    infinite: true,
    autoplay:true,
    speed: 500,
    slidesToShow: 1,
arrows:false,
    slidesToScroll: 1,

  };

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };
  
  return (
    <div className='hero-main-body'>
      <div className="hero-sub-body">
        <Navbar />
        <div className="container-fluid">
          <div className="row hero-row">
            <div className="col-lg-7 col-md-7 col-sm-12" data-aos="fade-right">
              <div className="banner-left-contents">
                <div className="welcome-heading1">
                  <h3>Welcome To First Logic Meta Lab</h3>
                </div>
                <div className="banner-main-heading">
                  <h1>Innovative Solutions for a Changing World</h1>
                </div>
                <div className="banner-description">
                  <p>Our user-centered design approach creates software solutions that are easy to use and deliver maximum impact. Our focus on user experience ensures that our software solutions meet the needs of both businesses and end-users.</p>
                  <div className="get-details-btn">
                    <button>Get Details</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-5 col-sm-12"data-aos="fade-left">
            <div className="banner-right-contents">
            <Slider  ref={sliderRef} {...settings}>
                  <div>

                  <div className="banner-image">
                      <img src="/Images/Banner BG Image copy.jpg" alt="" />
                  </div>
                  </div>
                  <div>
                         <div className="banner-image">
                         <img src="/Images/Banner BG Image copy.jpg" alt="" />
                  </div>
                  </div>
                  <div>
                  <div className="banner-image">
                  <img src="/Images/Banner BG Image copy.jpg" alt="" />
                    </div>
                  </div>
      
                </Slider>
          
   <div className="arrowss">
   <div className="prev-arrow" onClick={handlePrev}>
                <img src="/Images/Icon next.png" alt="" />
          </div>
          <div className="next-arrow"onClick={handleNext}>
          <img src="/Images/Icon next.png" alt="" />
          </div>
   </div>
            </div>
               
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

import React, { useRef } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './Monals.scss';

const Monals = () => {
    const sliderRef = useRef(null);
    // Settings for the slider
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 3, // Initial slides to show
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0px',
        arrows:false,
        responsive: [
            {
                breakpoint: 1024, // Adjust these breakpoints as needed
                settings: {
                    slidesToShow: 3, 
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1, // Change the number of slides to show on mobile devices
                }
            }
        ]
    };
    const handleNext = () => {
        sliderRef.current.slickNext();
      };
    
      const handlePrev = () => {
        sliderRef.current.slickPrev();
      };
    return (
        <div className='Monals-main-body'>
            <div className="monals-sub-body">
            <div className="arrowss">
   <div className="prev-arrow" onClick={handlePrev}>
                <img src="/Images/Icon next.png" alt="" />
          </div>
          <div className="next-arrow"onClick={handleNext}>
          <img src="/Images/Icon next.png" alt="" />
          </div>
   </div>
                <h1>Testimonials</h1>
                <div className="monals-carousel">

                    <div className="quets1">
                        <img src="/Images/quote black copy.png" alt="" />
                    </div>
                    <Slider ref={sliderRef} {...settings}>
                        <div>
                            <div className="testimonals-card">
                                <div className="card-body">
                                    <div className="profile-image">
                                        <img src="/Images/Testimonial-1 copy.jpg" alt="" />
                                    </div>
                                    <div className="heading">
                                        <h1>Hanna</h1>
                                    </div>
                                </div>
                                <div className="paragraph-section">
                                    <p>Phasellus condimentum elit purus, ac fringilla augue consequat id. Donec non volutpat augue, id consectetur leo. Aliquam feugiat hendrerit felis, vel pellentesque ligula scelerisque vitae.</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="testimonals-card">
                                <div className="card-body">
                                    <div className="profile-image">
                                        <img src="/Images/Testimonial-1 copy.jpg" alt="" />
                                    </div>
                                    <div className="heading">
                                        <h1>Hanna</h1>
                                    </div>
                                </div>
                                <div className="paragraph-section">
                                    <p>Phasellus condimentum elit purus, ac fringilla augue consequat id. Donec non volutpat augue, id consectetur leo. Aliquam feugiat hendrerit felis, vel pellentesque ligula scelerisque vitae.</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="testimonals-card">
                                <div className="card-body">
                                    <div className="profile-image">
                                        <img src="/Images/Testimonial-1 copy.jpg" alt="" />
                                    </div>
                                    <div className="heading">
                                        <h1>Hanna</h1>
                                    </div>
                                </div>
                                <div className="paragraph-section">
                                    <p>Phasellus condimentum elit purus, ac fringilla augue consequat id. Donec non volutpat augue, id consectetur leo. Aliquam feugiat hendrerit felis, vel pellentesque ligula scelerisque vitae.</p>
                                </div>
                            </div>
                        </div>
                        <div >
                            <div className="testimonals-card" >
                                <div className="card-body">
                                    <div className="profile-image">
                                        <img src="/Images/Testimonial-1 copy.jpg" alt="" />
                                    </div>
                                    <div className="heading">
                                        <h1>Hanna</h1>
                                    </div>
                                </div>
                                <div className="paragraph-section">
                                    <p>Phasellus condimentum elit purus, ac fringilla augue consequat id. Donec non volutpat augue, id consectetur leo. Aliquam feugiat hendrerit felis, vel pellentesque ligula scelerisque vitae.</p>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
                <div className="quets2">
                        <img src="/Images/quote black copy.png" alt="" />
                    </div>
            </div>
        </div>
    );
}

export default Monals;

import './About.scss'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once:true
    });
  }, []);
  return (
    <div className='AboutMainWrapper'>
      <div className="about">
      
        <div className="container-fluid">
          <div className="contact-details">
            <div className="row">
              <div className="col-lg-4 col-sm-12">
                <div className="contact-card" data-aos="fade-right">
                  <div className="contact-img"><img src="/Images/Icon 2-mobile.png" alt="" /></div>
                  <div className="contact-text"><span>+91 7012 48 38 28</span></div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-12">
                <div className="contact-card" data-aos="fade-up">
                  <div className="contact-img"><img src="/Images/Icon 3-mail.png" alt="" /></div>
                  <div className="contact-text"><span>Info@firstlogicmetalab.com</span></div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-12">
                <div className="contact-card" data-aos="fade-left">
                  <div className="contact-img"><img src="/Images/Icon 1-time.png" alt="" /></div>
                  <div className="contact-text"><span>9am - 6pm (Mon - Sat)</span></div>
                </div>
              </div>
            </div>

          </div>
        </div>
<div className="about-heading-wrapper">
<h3 className="about-heading" data-aos="fade-up">About First Logic</h3>
<p className="about-para" data-aos="fade-up">Realize The Future Of Digital Intelligence</p>
</div>
        <div className="container-fluid">
          <div className="row about-details">
            <div className="col-lg-6 about-details-left">
                 <div className="about-details-left-image">
                  <img src="/Images/About - Picture.png" alt="" />
                  
                <div className="circle1"><span>Over 200+<br/>Clients</span></div>
                <div className="circle2"><span>11 Years<br/>Experience in IT</span> </div>
                 </div>
     


                <div className="mobile-cards">
                <div className="mobile-card" data-aos="fade-up"><span >Over 200+ Clients</span></div>
                <div className="mobile-card" data-aos="fade-up"><span>11 Years Experience in IT</span></div>
              </div>
           </div>
            <div className="col-lg-6 about-details-right" data-aos="fade-left" >
       <div className="about-right-content">
       <p >We are a team of professionals who assist companies in modernizing with innovative and attentive business development solutions to boost sales and revenue. We help you make the most of this digital era by providing sought‐after business development solutions for all niches. We came together from various backgrounds with one vision: to bring a lean, user-centric approach to product innovation and software development by completely understanding the business needs before building anything.</p>
       <button>More About Us</button>
       </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About

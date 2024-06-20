import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Service.scss'
const Service = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000, // duration of animations in milliseconds
        
        });
      }, []);
  return (
    <div className='service-main-body'>
     <div className="service-sub-body">
    
        <div className="Service-main-headings">
               <h3 data-aos="fade-up">Our Services</h3>
               <h1 data-aos="fade-up">We Offer a Wide Variety of IT Services</h1>
        </div>
      <div className="container-fluid">
        <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
           <div className="service-card" data-aos="fade-up">
             <div className="card-description-section">
               <div className="card-descpiption">
                <div className="service-card-heading-wrapper">
                <h1>IT Development</h1>
                </div>
                <p>We employs the latest technologies and development methodologies to create reliable and scalable software applications that meet your business needs and exceed your expectations. </p>
               </div>
             </div>
             <div className="card-image-section">
                <img src="/Images/1 IT Development.jpg" alt="" />
             </div>
           </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="service-card" data-aos="fade-up">

            <div className="card-image-section">
                <img src="/Images/2 IT Management.jpg" alt="" />
             </div>
             <div className="card-description-section">
               <div className="card-descpiption">
               <div className="service-card-heading-wrapper">
                <h1>IT Management</h1>
                </div>
                <p>We provide comprehensive solutions for infrastructure, security, and maintenance, allowing you to focus on your core business operations.</p>
               </div>
             </div>
         
           </div>
                </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="service-card" data-aos="fade-up">
             <div className="card-description-section">
               <div className="card-descpiption">
               <div className="service-card-heading-wrapper">
                <h1>Data Security</h1>
                </div>
                <p>Offers end-to-end encryption, regular backups, and continuous monitoring to ensure your data is secure and compliant with industry standards.</p>
               </div>
             </div>
             <div className="card-image-section">
                <img src="/Images/3 Data Security.jpg" alt="" />
             </div>
           </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="service-card" data-aos="fade-up">
   
             <div className="card-image-section">
                <img src="/Images/4 Business Reform.jpg" alt="" />
             </div>
             <div className="card-description-section">
               <div className="card-descpiption">
               <div className="service-card-heading-wrapper">
                <h1>Business Reform</h1>
                </div>
                <p>Include process automation, data analytics, and customized software solutions to enhance efficiency and productivity, and drive growth.</p>
               </div>
             </div>
           </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="service-card" data-aos="fade-up">
             <div className="card-description-section">
               <div className="card-descpiption">
               <div className="service-card-heading-wrapper">
                <h1>IT Consultancy</h1>
                </div>
                <p>Stay ahead of the competition with cutting-edge technology solutions, effective risk management, and cost-effective strategies for IT infrastructure development.</p>
               </div>
             </div>
             <div className="card-image-section">
                <img src="/Images/5 IT Consultancy.jpg" alt="" />
             </div>
           </div>
                </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="service-card" data-aos="fade-up">
        
             <div className="card-image-section">
                <img src="/Images/6 QA & Testing.jpg" alt="" />
             </div>
             <div className="card-description-section">
               <div className="card-descpiption">
               <div className="service-card-heading-wrapper">
                <h1>QA & Testing</h1>
                </div>
                <p>We employs the latest tools and methodologies to ensure that your software is bug-free, meets industry standards, and delivers a superior user experience.</p>
               </div>
             </div>
           </div>
            </div>
        </div>
      </div>
     </div>
    </div>
  )
}

export default Service
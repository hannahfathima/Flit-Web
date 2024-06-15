import React, { useEffect } from 'react'
import './ServiceCunsult.scss'
import 'aos/dist/aos.css';
import AOS from 'aos';
import Footer from '../Footer/Footer'
const ServiceCunsult = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000,
        
        });
      }, []);
    return (
        <div className='service-cunsult-main-body'>


            <section>
                <div className="services-industry-container">
                    <div className="services-industry-headings">
                        <h3 data-aos='fade-up'>SERVICES & INDUSTRIES</h3>
                        <h1 data-aos='fade-up'>Complementary Software Services & Expert Industries</h1>
                    </div>

                    <div className="container-fluid">

                        <div className="row g-0 service-industry-rows">

                            <div className="col-lg-12">
                                <div className="service-industry-card-heading">
                                    <h1>Complementary Services</h1>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 " data-aos='fade-right'>
                                <div className="service-industry-card-left">
                                    <img src="/Images/Complementary Services - Pic.jpg" alt="" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12" data-aos='fade-left'>
                                <div className="service-industry-card-right">
                                    <div className="service-industry-card-list">
                                        <span>Support & Maintenance</span>
                                    </div>
                                    <div className="service-industry-card-list">
                                        <span>Security Testing</span>
                                    </div>
                                    <div className="service-industry-card-list">
                                        <span>Hosting & Migration</span>
                                    </div>
                                    <div className="service-industry-card-list">
                                        <span>Software Project Rescue</span>
                                    </div>
                                    <div className="service-industry-card-list">
                                        <span>QA & Testing Services</span>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="row g-0 service-industry-rows">

                            <div className="col-lg-12">
                                <div className="service-industry-card-heading">
                                    <h1>Specialist Software Services</h1>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12" data-aos='fade-right'>
                                <div className="service-industry-card-right">
                                    <div className="service-industry-card-list">
                                        <span>Legacy Modernisation</span>
                                    </div>
                                    <div className="service-industry-card-list">
                                        <span>Enterprice IT & Outsourcing</span>
                                    </div>
                                    <div className="service-industry-card-list">
                                        <span>UI/UX Design Services</span>
                                    </div>
                                    <div className="service-industry-card-list">
                                        <span>Software Consultancy</span>
                                    </div>
                                    <div className="service-industry-card-list">
                                        <span>Cloud Computing</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12" data-aos='fade-left'>
                                <div className="service-industry-card-left">
                                    <img src="/Images/Specialist Software Services - Pic.jpg" alt="" />
                                </div>
                            </div>

                        </div>
                        <div className="row g-0 service-industry-rows service-industry-rows3 ">

                            <div className="col-lg-12">
                                <div className="service-industry-card-heading">
                                    <h1>Our Expert Industries</h1> 
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12" >
                                <div className="service-industry-card-right">
                                    <div className="service-industry-card-list" data-aos='fade-up' data-aos-duration="1000" >
                                        <span>Financial Services</span>
                                    </div>
                                    <div className="service-industry-card-list" data-aos='fade-up' data-aos-duration="1500">
                                        <span>Retail & E-Commerce</span>
                                    </div>
                                    <div className="service-industry-card-list" data-aos='fade-up' data-aos-duration="2000">
                                        <span>Hospitality</span>
                                    </div>
                                    <div className="service-industry-card-list" data-aos='fade-up'  data-aos-duration="2500">
                                        <span>Non-Profits & SME's</span>
                                    </div>
                                    <div className="service-industry-card-list" data-aos='fade-up' data-aos-duration="3000">
                                        <span>Healthcare & Construction</span>
                                    </div>
                                    <div className="service-industry-card-list" data-aos='fade-up'  data-aos-duration="3500">
                                        <span>Education & Training</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12" >
                                <div className="service-industry-card-right">
                                    <div className="service-industry-card-list" data-aos='fade-up' data-aos-duration="1000">
                                        <span>Sports & Leisure</span>
                                    </div>
                                    <div className="service-industry-card-list" data-aos='fade-up' data-aos-duration="1500"> 
                                        <span>Government & Public Sectors</span>
                                    </div>
                                    <div className="service-industry-card-list" data-aos='fade-up'  data-aos-duration="2000">
                                        <span>Travel & Tourism</span>
                                    </div>
                                    <div className="service-industry-card-list" data-aos='fade-up'  data-aos-duration="2500">
                                        <span>Insurance</span>
                                    </div>
                                    <div className="service-industry-card-list" data-aos='fade-up'  data-aos-duration="3000">
                                        <span>Automotive</span>
                                    </div>
                                    <div className="service-industry-card-list" data-aos='fade-up'  data-aos-duration="3500">
                                        <span>Logistics</span>
                                    </div>
                                </div>
                            </div>

                        </div>


                    </div>
                </div>
            </section>
            <div class="consultation-section">
                <div className="service-cunsultation-card">
                    <div className="card-deatils">
                   <div className="card-headings">
                   <p data-aos='fade-right'>We are here to answer your questions 24/7</p>
                   <h1 data-aos='fade-right'>NEED A CONSULTATION?</h1>
                   </div>
                      <div className="cunsult-card-btn" data-aos='fade-left'>
                      <button >Contact Us</button>
                      </div>
                    </div>

                    
                </div>
            </div>
<Footer/>


        </div>
    )
}

export default ServiceCunsult

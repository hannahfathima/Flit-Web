import React from 'react'
import './AboutPage.scss'
import AboutNav from '../NavbarAbout/AboutNav'
const AboutPage = () => {
  return (
    <div className='about-main-body'>
     
      <div className="about-sub-body">
      <AboutNav/>
        <div className="about-content">
          <div className="About-Heading">
            <h1>About Us</h1>
          </div>

          <div className="about-description">
            <h6>A team of passionate and skilled professionals who are dedicated to delivering top-quality business automation and outsourcing services to our clients.</h6>
          </div>
        </div>
      </div>

      <div className="about-banner-2">
        <div className="banner2-story-heading">
          <h1>11 Years of Experience</h1>
          <h3>Our Story of Innovation and Success</h3>
          <div className="video-play-button">
            <a href="">          <img src="/Images/Our Story Play Button White.png" alt="" /></a>
          </div>
        </div>
        <div className="banner2-description">
          <div>
            <p>  We are a team of professionals who assist companies in modernizing with innovative and attentive business development solutions to boost sales and revenue. We help you make the most of this digital era by providing sought‐after business development solutions for all niches. We came together from various backgrounds with one vision: to bring a lean, user-centric approach to product innovation and software development by completely understanding the business needs before building anything.</p>



          </div>
          <div style={{ paddingTop: "18px" }}>
            <p>  We aspire to touch the lives of millions of people, through information technology and listen to their challenges and ambitions. We develop technology from scratch to launch by realizing your aspirations and assist you in the relevant fields with optimal services. We support start-ups in turning ideas into products and businesses in undergoing digital transformation.</p>

          </div>
        </div>
      </div>

      <div className="whyChoose-us-body">
        <div className="whychoose-sub-heading">
          <h3>WHY CHOOSE US
          </h3>
        </div>
        <div className="whychoose-main-heading">
          <h1>Why We Are Your Best Choice
          </h1>
        </div>

        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3">
              <div className="why-choose-card">
              <div className="card-image">
                <img src="/Images/Why we Pic 1.jpg" alt="" />
              </div>

              <div className="card-heading">
                <h1>Effective Use of Technology</h1>
              </div>
              <div className="card-description">
                <p>We deliver innovative software solutions that leverage emerging technologies to drive business growth.</p>
              </div>
              </div>
              </div>
            <div className="col-lg-3">
            <div className="why-choose-card">
              <div className="card-image">
                <img src="/Images/Why we Pic 2.jpg" alt="" />
              </div>

              <div className="card-heading">
                <h1>Strong and Positive Leadership
                </h1>
              </div>
              <div className="card-description">
                <p>We fosters a culture of trust, collaboration, & innovation, driving successful project delivery & business growth.</p>
              </div>
              </div>
            </div>
            <div className="col-lg-3">
            <div className="why-choose-card">
              <div className="card-image">
                <img src="/Images/Why we Pic 3.jpg" alt="" />
              </div>

              <div className="card-heading">
                <h1>Excellent Customer Service
                </h1>
              </div>
              <div className="card-description">
                <p>Exceptional service & support throughout the development process, ensuring customer satisfaction.</p>
              </div>
              </div>
            </div>
            <div className="col-lg-3">
            <div className="why-choose-card">
              <div className="card-image">
                <img src="/Images/Why we Pic 4.jpg" alt="" />
              </div>

              <div className="card-heading">
                <h1>Healthy Work Environment
                </h1>
              </div>
              <div className="card-description">
                <p>We foster a supportive & positive work environment that encourages creativity, growth, & work-life balance.</p>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage

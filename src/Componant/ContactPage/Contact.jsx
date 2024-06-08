import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import './Contact.scss'

const Contact = () => {
  return (
    <div className='ContactPageMainWrapper'>
     
      <div className="contactPage">
      <Navbar/>
        <div className="content"><h1>Contact Us</h1></div>
      </div>
      <div className="getInTouch">
        <h1>Get In Touch</h1>
        <div className="row contact-details">
            <div className="col-lg-6 contact-details-left">
              <div className="contact-img"><img src="/Images/Contact Pic 2.jpg" alt="" /></div>
            </div>
            <div className="col-lg-6 contact-details-right">
              <div className="contact-detils-card-main">
                <div className="contact-details-card">
                  <div className="contact-details-card-left">
                    <img src="/Images/gif-location.gif" alt="" />
                  </div>
                  <div className="contact-details-card-right">
                   <span>Puthanveettil Tower, Bypass Road<br/>
Perinthalmanna, KERALA - 679322</span>
                  </div>

                </div>
                <div className="contact-details-card">
                  <div className="contact-details-card-left">
                    <img src="/Images/gif-contact.gif" alt="" />
                  </div>
                  <div className="contact-details-card-right">
                   <span>(+91) 7012 48 38 28<br/>
(+91) 7306 26 55 10</span>
                  </div>

                </div>
                <div className="contact-details-card">
                  <div className="contact-details-card-left">
                    <img src="/Images/gif-email.gif" alt="" />
                  </div>
                  <div className="contact-details-card-right">
                   <span>Puthanveettil Tower, Bypass Road<br/>
Perinthalmanna, KERALA - 679322</span>
                  </div>

                </div>
              </div>
            </div>
        </div>
   
      </div>

      <div className="contact-form">
      <h1>
      Let's talk about your next project
      </h1>
      <div className="container-fluid">
      <div className="row contact-form-row">
          <div className="col-lg-6">
            <div className="contact-map">
              <div className="map-section">
                <img src="/Images/Location copy.png" alt="" />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="contact-form-right-side">
              <div className="form-detaills">
                <form action="">
        <div className='form-group'>       
             <input type="text" placeholder='Name *' />
                  <input type="text" placeholder='Email *' />
                  </div>
                  <div className='form-group'>         
                     <input type="text" placeholder='Phone *' />
                  <input type="text" placeholder='Subject *' />
                  </div>
                 <textarea name="" placeholder='Message' id=""></textarea>

                 <div className="send-message-btn">
                 <button type="submit"><span>Send Message</span></button>
                 </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </div>


  )
}

export default Contact

import './Footer.scss'

const Footer = () => {
    
    return (
        <div className='FooterMainWrapper'>
            <div className="footer">
                <div className="b-t-arrow">
                  <a href="#">  <img src="/Images/Icon up-arrow.png" alt="" /></a>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-12 footer-left">
                            <div className="logo"><img src="/Images/FLML-01.png" alt="" /></div>
                            <p className="location">Location</p>
                            <p className="location-disc">Puthanveettil Tower, Bypass Road<br />
                                Perinthalmanna, KERALA - 679322</p>
                                <div className="social-icons">
                                   <a href=""> <img src="/Images/Z1 in box.png" alt="" /></a>
                                   <a href=""> <img src="/Images/Z2 mail.png" alt="" /></a>
                                   <a href=""> <img src="/Images/Z3 insta.png" alt="" /></a>
                                   <a href=""> <img src="/Images/Z4 map box.png" alt="" /></a>
                                   <a href=""> <img src="/Images/Z5 fb box.png" alt="" /></a>
                                   <a href=""> <img src="/Images/Z56x.png" alt="" /></a>
                                </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 footer-center-left">
                            <h3>IT Services</h3>
                            <div className="List">
                            <div><a href="">IT Services</a></div>
                            <div><a href="">Cyber Security</a></div>
                            <div><a href="">Cloud Computing</a></div>
                            <div><a href="">Managed IT</a></div>
                            <div><a href="">IT Support</a></div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 footer-center-right">
                            <h3>Important Links</h3>
                            <div className="List">
                            <div><a href="">About Us</a></div>
                            <div><a href="">Meet Our Team</a></div>
                            <div><a href="">Case Studies</a></div>
                            <div><a href="">Location</a></div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 footer-right">
                        <h3>Support</h3>
                            <div className="List">
                            <div><a href="">Forum Support</a></div>
                            <div><a href="">Help & FAQ</a></div>
                            <div><a href="">Contact Us</a></div>
                            <div><a href="">Cookies Policy</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="cpy-rgt">
                <span>© 2024 First Logic Meta Lab PVT LTD. All Rights Reserved</span>
            </div>
        </div>
    )
}

export default Footer

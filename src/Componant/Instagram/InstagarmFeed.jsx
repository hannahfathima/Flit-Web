import './InstagramFeed.scss'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const InstagarmFeed = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000, 
          once:true
        });
      }, []);
  return (
    <div className='instaFeedMainWrapper'>
      <div className="instaFeed">
      <div className="instaHeading" data-aos="fade-up">
      <div className="heading" >Instagram Feed</div>
      </div>
      <div className="container-fluid">
        <div className="row feed-card-main">
            <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="feed-card" data-aos="fade-right">
                    <div className="img-container">
                        <img src="/Images/student 1.jpg" alt="" />
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="feed-card" data-aos="fade-up">
                    <div className="img-container">
                        <img src="/Images/student 2.jpg" alt="" />
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="feed-card" data-aos="fade-left">
                    <div className="img-container">
                        <img src="/Images/student 3.jpg" alt="" />
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="feed-card" data-aos="fade-right">
                    <div className="img-container">
                        <img src="/Images/student 4.jpg" alt="" />
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="feed-card" data-aos="fade-up">
                    <div className="img-container">
                        <img src="/Images/student 5.jpg" alt="" />
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="feed-card" data-aos="fade-left">
                    <div className="img-container">
                        <img src="/Images/student 6.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default InstagarmFeed

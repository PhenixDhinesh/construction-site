import React from 'react'
import whiteLogo from "../assets/DE logo1 2.svg";
import poweredBy from "../assets/BIT.svg";
import { Link } from 'react-router-dom';

function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0, 
      behavior: 'smooth', 
    });
  };
  const showInMapClicked = () => {
    window.open("https://www.google.com/maps/place/Techforge/@11.6711929,78.157041,17z/data=!3m2!4b1!5s0x3babf1b380af700d:0x45f4fa32b2a711ac!4m6!3m5!1s0x3babf1c56dd4f21d:0xf875300e92d15108!8m2!3d11.6711929!4d78.1596159!16s%2Fg%2F11bwflt448?entry=ttu" );
  };
  return (
    <div>
      
      <footer className="footer">
        <div className="footer_container">
          <div className="footer_logo">
            <div className="footer_logo_container">
            <a href="https://www.decisiveengg.com/" target="blank"><img src={whiteLogo} alt="" /></a>

            </div>
            <p>
              Integer in est elit. Mauris placerat blandit massa quis aliquam.
              Donec efficitur risus{" "}
            </p>
          </div>
          <div className="contact_detail_container">
            <div className="nav-Container">
           <p className='links'> <Link to="/" style={{textDecoration:"none",color:"#fff",}}>Home</Link></p>
            <p className='links'><Link to="/service" style={{textDecoration:"none",color:"#fff"}}>Our services</Link></p>
           <p className='links'> <Link to="/about" style={{textDecoration:"none",color:"#fff"}}>About Us</Link></p>
           <p className='links'> <Link to="/contact" style={{textDecoration:"none",color:"#fff"}}>Contact Us </Link></p>
              <a href="mailto:email@example.com?subject=Hello&body=I'd like to discuss...">Get quote now</a>
           <p className='links' onClick={handleScrollToTop}>Back to Top</p>
            </div>

            <div className="contact-Container">
            <a href={`tel:${+91983432423}`}>+91 983432423</a>
              <a href="mailto:email@example.com?subject=Hello&body=I'd like to discuss...">Contact@gmail.com</a>
              <p className="address" onClick={showInMapClicked}>
                SF NO 385 4 POST OFF EAST Tharamangalam, Salem - 636 502, India
              </p>
            </div>
          </div>
          <hr />
          <div className="term_details">
            <p>@2024 Decisive Engineering pvt.ltd. Copyrights received.</p>
            <div className="terms">
              <p>*Terms and Condition</p>
              <p>*Privacy policy</p>
              <div className="powered_container">
              <a href="www.bluice.in"> <img src={poweredBy} alt="" /></a>
              </div>
            </div>
          </div>
          <div className="res_term_details">
            <div className="responsive_terms">
              <div className="terms">
                <p>*Terms and Condition</p>
                <p>*Privacy policy</p>
              </div>
              <p>@2024 Decisive Engineering pvt.ltd. Copyrights received.</p>
            </div>
            <div className="powered_container">
            <a href="https://www.bluice.in/"> <img src={poweredBy} alt="" /></a>

            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer

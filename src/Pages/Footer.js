import React from 'react'
import whiteLogo from "../assets/whiteLogo.svg";
import poweredBy from "../assets/poweredBy.svg";
import { Link } from 'react-router-dom';

function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0, 
      behavior: 'smooth', // Smooth scrolling to the top
    });
  };

  return (
    <div>
      
      <footer className="footer">
        <div className="footer_container">
          <div className="footer_logo">
            <div className="footer_logo_container">
              <img src={whiteLogo} alt="" />
            </div>
            <p>
              Integer in est elit. Mauris placerat blandit massa quis aliquam.
              Donec efficitur risus{" "}
            </p>
          </div>
          <div className="contact_detail_container">
            <div className="nav-Container">
            <Link to="/" style={{textDecoration:"none",color:"#fff"}}><p className='links'>Home</p></Link>
            <Link to="/service" style={{textDecoration:"none",color:"#fff"}}><p className='links'>Our services</p></Link>
            <Link to="/about" style={{textDecoration:"none",color:"#fff"}}><p className='links'>About Us</p></Link>
            <Link to="/contact" style={{textDecoration:"none",color:"#fff"}}><p className='links'>Contact Us</p></Link>
              <p>Get quote now</p>
            <Link to="/"  onClick={handleScrollToTop} style={{textDecoration:"none",color:"#fff"}}><p className='links'>Back to Top</p></Link>
            </div>

            <div className="contact-Container">
              <p>+91 983432423</p>
              <p>Contact@gmail.com</p>
              <p className="address">
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
                <p style={{ fontSize: "8px" }}>Powered by</p>
                <img src={poweredBy} alt="" />
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
              <p style={{ fontSize: "5px" }}>Powered by</p>
              <img src={poweredBy} alt="" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer

import React from 'react'
import whiteLogo from "../assets/DE_logo White.svg";
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
    window.open("https://maps.app.goo.gl/a8KZYzXmRLgJnB3N9" );
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

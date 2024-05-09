import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import phone from "../assets/call.svg";
import mail from "../assets/mail.svg";
import store from "../assets/store.svg";
import location from "../assets/locationMap.svg";
import "../styleSheets/contact.css";
function ContactUs() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when component mounts
  }, []);
  const showInMapClicked = () => {
    window.open(
      "https://www.google.com/maps/place/Techforge/@11.6711929,78.157041,17z/data=!3m2!4b1!5s0x3babf1b380af700d:0x45f4fa32b2a711ac!4m6!3m5!1s0x3babf1c56dd4f21d:0xf875300e92d15108!8m2!3d11.6711929!4d78.1596159!16s%2Fg%2F11bwflt448?entry=ttu"
    );
  };
  return (
    <div>
      <Header />

      <div className="contact_banner">
        {/* <img src={banner} className="banner_img" alt="" /> */}
        {/* <img src={landing} className="res_banner_img" alt="" /> */}

        <div className="content">
          <div className="content_text">
            <h3>
            Let's Get Started on Your Project
            </h3>
            <p>
            Have a question? Ready to discuss your vision? Contact us today and we'll turn your dream build into reality.

            </p>
          </div>

          <a href="mailto:email@example.com?subject=Hello&body=I'd like to discuss...">
            {" "}
            <button>get quote now</button>
          </a>
        </div>
      </div>

      <div className="contact_res_banner">
        <div className="content">
          <div className="content_text">
            <h3>
            Let's Get Started on Your Project
            </h3>
            <p>
            Have a question? Ready to discuss your vision? Contact us today and we'll turn your dream build into reality.
            </p>
          </div>

          <a
            href="mailto:email@example.com?subject=Hello&body=I'd like to discuss..."
            className="a_link"
          >
            {" "}
            <button>get quote now</button>
          </a>
        </div>
      </div>

      <div className="contact_container_box">
        <div className="map_image">
        <iframe
        className="location_map"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3174.683132712172!2d78.157041!3d11.6711929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babf1c56dd4f21d%3A0xf875300e92d15108!2sTechforge!5e0!3m2!1sen!2sin!4v1625248572881!5m2!1sen!2sin"
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
        </div>
      </div>

      <div className="contact_details_container">
        <div className="contact_details_container_box">
          <div className="contact_container">
            <div className="contact_icon">
            <a className="contact_icon" href={`tel:${+918124594875}`} style={{textDecoration:"none",color:"#000000"}}>
              <div className="contact_icon_box">
                <img src={phone}     alt="" />
              </div>
              <h3>Phone</h3>
              </a>
            </div>
            <div className="contact_detail">
              <h3>Mr.Arul</h3>
              <p><a href={`tel:${+918124594875}`} style={{textDecoration:"none",color:"#000000"}}>+91 81245 94875</a></p>
            </div>
          </div>
          <div className="contact_container">
            <div className="contact_icon">
              <a className="contact_icon"
                href="mailto:email@example.com?subject=Hello&body=I'd like to discuss..."
                style={{ textDecoration: "none", color: "#000000" }}
              >
                <div className="contact_icon_box">
                  <img src={mail} alt="" />
                </div>
              <h3>
             
                  Email
              </h3>
              </a>

            </div>
            <div className="contact_detail">
              <h3>Mr.Arul</h3>
              <p>
                <a
                  href="mailto:email@example.com?subject=Hello&body=I'd like to discuss..."
                  style={{ textDecoration: "none", color: "#000000" }}
                >
                  contact@company.com
                </a>{" "}
              </p>
            </div>
          </div>
          <div className="contact_container">
            <div className="contact_icon" onClick={showInMapClicked}>
              <div className="contact_icon_box">
                {" "}
                <img src={store} alt="" />
              </div>
              <h3>Address</h3>
            </div>
            <div className="contact_detail" onClick={showInMapClicked}>
              {/* <h3>Mr.Arul</h3> */}
              <p>
                +SF NO 385 4 POST OFF EAST Tharamangalam, Salem - 636 502, India
              </p>
            </div>
          </div>
        </div>
        <div className="contact_details_container_box_resposive">
         <div className="phone_email">
          <div className="contact_container">
            <div className="contact_icon">
            <a className="contact_icon" href={`tel:${+918124594875}`} style={{textDecoration:"none",color:"#000000"}}>
              <div className="contact_icon_box">
                <img src={phone}     alt="" />
              </div>
              <h3>Phone</h3>
              </a>
            </div>
            <div className="contact_detail">
              <h3>Mr.Arul</h3>
              <p><a href={`tel:${+918124594875}`} style={{textDecoration:"none",color:"#000000"}}>+91 81245 94875</a></p>
            </div>
          </div>
          <div className="contact_container">
            <div className="contact_icon">
              <a className="contact_icon"
                href="mailto:email@example.com?subject=Hello&body=I'd like to discuss..."
                style={{ textDecoration: "none", color: "#000000" }}
              >
                <div className="contact_icon_box">
                  <img src={mail} alt="" />
                </div>
              <h3>
             
                  Email
              </h3>
              </a>

            </div>
            <div className="contact_detail">
              <h3>Mr.Arul</h3>
              <p>
                <a
                  href="mailto:email@example.com?subject=Hello&body=I'd like to discuss..."
                  style={{ textDecoration: "none", color: "#000000" }}
                >
                  contact@company.com
                </a>{" "}
              </p>
            </div>
          </div>
          </div>
          <div className="contact_container" id="contact_address">
            <div className="contact_icon" onClick={showInMapClicked}>
              <div className="contact_icon_box">
                {" "}
                <img src={store} alt="" />
              </div>
              <h3>Address</h3>
            </div>
            <div className="contact_detail" onClick={showInMapClicked}>
              {/* <h3>Mr.Arul</h3> */}
              <p style={{width:"40vw"}}>
                +SF NO 385 4 POST OFF EAST Tharamangalam, Salem - 636 502, India
              </p>
           
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default ContactUs;

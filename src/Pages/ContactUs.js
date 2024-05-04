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
      <div className="contact_container_box">
        <div className="map_image">
          <img src={location} alt="" className="location_map" />
        </div>
      </div>

      <div className="contact_details_container">
        <div className="contact_details_container_box">
          <div className="contact_container">
            <div className="contact_icon">
            <a href={`tel:${+918124594875}`} style={{textDecoration:"none",color:"#000000"}}>
              <div className="contact_icon_box">
                <img src={phone} alt="" />
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
              <a
                href="mailto:email@example.com?subject=Hello&body=I'd like to discuss..."
                style={{ textDecoration: "none", color: "#000000" }}
              >
                <div className="contact_icon_box">
                  <img src={mail} alt="" />
                </div>
              </a>
              <h3>
                <a
                  href="mailto:email@example.com?subject=Hello&body=I'd like to discuss..."
                  style={{ textDecoration: "none", color: "#000000" }}
                >
                  Email
                </a>
              </h3>
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
      </div>

      <Footer />
    </div>
  );
}

export default ContactUs;

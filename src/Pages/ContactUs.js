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
    window.open("https://maps.app.goo.gl/a8KZYzXmRLgJnB3N9");
  };
  return (
    <div>
      <Header />

      <div className="contact_banner" style={{ marginTop: "6.3rem" }}>
        {/* <img src={banner} className="banner_img" alt="" /> */}
        {/* <img src={landing} className="res_banner_img" alt="" /> */}

        <div className="content">
          <div className="content_text">
            <h3>Let's Get Associated with Your Project</h3>
            <p>
              Have a question? Ready to discuss your vision? Contact us today
              and we'll turn your dream build into reality.
            </p>
          </div>

          <a href="mailto:email@example.com?subject=Hello&body=I'd like to discuss...">
            {" "}
            <button>get quote now</button>
          </a>
        </div>
      </div>

      <div className="contact_res_banner" style={{ marginTop: "5rem" }}>
        <div className="content">
          <div className="content_text">
          <h3>Let's Get Associated with Your Project</h3>

            <p>
              Have a question? Ready to discuss your vision? Contact us today
              and we'll turn your dream build into reality.
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
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3859.105482331914!2d77.96906101478313!3d11.692494391441157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16721abf0ed5%3A0x92c2f8d9b5b5b14e!2s11%C2%B041'33.0%22N%2077%C2%B058'16.5%22E!5e0!3m2!1sen!2sin!4v1620294994719!5m2!1sen!2sin"
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
              <a
                href={`tel:${+919629443771}`}
                style={{ textDecoration: "none", color: "#000000" }}
              >
                <div className="contact_icon_box">
                  <img src={phone} alt="" />
                </div>
              </a>
            </div>
            <div>

                <a
                className="con_text"
                  href={`tel:${+919629443771}`}
                  style={{ textDecoration: "none", color: "#000000" }}
                >
                +91 96 294 43771
                </a>

            </div>
          </div>
          <div className="contact_container">
            <div className="contact_icon">
              <a
                className="contact_icon"
                href="mailto:contact@decisiveengg.com ?subject=Hello&body=I'd like to discuss..."
                style={{ textDecoration: "none", color: "#000000" }}
              >
                <div className="contact_icon_box">
                  <img src={mail} alt="" />
                </div>
              </a>
            </div>

            <div>
           
                <a
                className="con_text"
                  href="mailto:email@example.com?subject=Hello&body=I'd like to discuss..."
                  style={{ textDecoration: "none", color: "#000000" }}
                >
                  contact@company.com
                </a>{" "}

            </div>
          </div>
          <div className="contact_container">
            <div className="contact_icon" onClick={showInMapClicked}>
              <div className="contact_icon_box">
                {" "}
                <img src={store} alt="" />
              </div>
            </div>
            <div onClick={showInMapClicked}>
              <p className="con_text">
                +SF NO 385 4 POST OFF EAST Tharamangalam, Salem - 636 502, India
              </p>
            </div>
          </div>
        </div>
        
        <div className="contact_details_container_box_resposive">
          <div className="phone_email">
          <div className="contact_container">
            <div className="contact_icon">
              <a
                href={`tel:${+918124594875}`}
                style={{ textDecoration: "none", color: "#000000" }}
              >
                <div className="contact_icon_box">
                  <img src={phone} alt="" />
                </div>
              </a>
            </div>
            <div>

                <a
                className="con_text"
                  href={`tel:${+918124594875}`}
                  style={{ textDecoration: "none", color: "#000000" }}
                >
                  +91 81245 94875
                </a>

            </div>
          </div>
          <div className="contact_container">
            <div className="contact_icon">
              <a
                className="contact_icon"
                href="mailto:email@example.com?subject=Hello&body=I'd like to discuss..."
                style={{ textDecoration: "none", color: "#000000" }}
              >
                <div className="contact_icon_box">
                  <img src={mail} alt="" />
                </div>
              </a>
            </div>

            <div>
           
                <a
                className="con_text"
                  href="mailto:email@example.com?subject=Hello&body=I'd like to discuss..."
                  style={{ textDecoration: "none", color: "#000000" }}
                >
                  contact@company.com
                </a>{" "}

            </div>
          </div>
          </div>
          <div className="contact_container" id="contact_address">
          <div className="contact_icon" onClick={showInMapClicked}>
              <div className="contact_icon_box">
                {" "}
                <img src={store} alt="" />
              </div>
            </div>
            <div onClick={showInMapClicked}>
              <p className="con_text">
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

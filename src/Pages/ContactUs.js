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

      <div className="contact_banner" style={{ marginTop: "8rem" }}>
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

      <div className="contact_res_banner" s style={{ marginTop: "8rem" }}>
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
            src="https://www.google.com/maps/place/11%C2%B041'33.0%22N+77%C2%B058'16.5%22E/@11.6925,77.97125,17z/data=!3m1!4b1!4m4!3m3!8m2!3d11.6925!4d77.97125?entry=ttu"
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

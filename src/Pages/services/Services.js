import React, { useState, useEffect } from "react";
import Header from "../Header";
import Footer from "../Footer";
import { LiaAngleDownSolid, LiaAngleUpSolid } from "react-icons/lia";

import "../../styleSheets/service.css";
function Services() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when component mounts
  }, []);
  const [showTab, setShowTab] = useState(0);

  const showContent = [
    {
      content:
        "Virtual Construction and BIM Services offer a revolutionary approach to the construction industry. By creating digital representations of buildings and infrastructure, this technology enhances visualization, coordination, and communication throughout the entire project lifecycle. With BIM, architectural, structural, and MEP systems are seamlessly integrated into a single model, fostering collaboration and improving project efficiency." ,    
        image: "path/to/image1.jpg", // Update with valid image path
    },
    {
      content:
        "When it comes to Structural Engineering Services, our focus is on analyzing and designing structural elements within buildings and infrastructure. We prioritize the stability, strength, and safety of the structure, ensuring that it meets all necessary requirements. Our services encompass structural analysis, detailed design of components such as steel and rebar, as well as the preparation of accurate shop drawings and as-built drawings.",
      image: "path/to/image2.jpg",
    },
    {
      content:
        "MEP Engineering Services play a crucial role in the design and coordination of mechanical, electrical, and plumbing systems within buildings. Our team specializes in creating efficient HVAC systems, electrical distribution networks, plumbing layouts, and fire protection systems. We guarantee that these systems function effectively and meet the specific requirements of each building.",   
        image: "path/to/image3.jpg",
    },
    {
      content:
        "We also provide comprehensive Support Services to ensure the success of your project. Our offerings include quantity take-off services for accurate material estimation, model-based quantity take-off for precise quantity calculations, feasibility studies to assess project viability, and value engineering to optimize costs without compromising quality or performance. With our support and expertise, we are committed to guiding you through every step of the project lifecycle.",
              image: "path/to/image4.jpg",
    },
  ];

  const handleClick = (index) => {
    // Toggle the state: if already showing, hide; if not, show the clicked tab
    setShowTab(showTab === index ? 0 : index);
  };


  return (
    <div>
      <Header />


      <div className="service_banner" style={{ marginTop: "6.3rem" }}>
        {/* <img src={banner} className="banner_img" alt="" /> */}
        {/* <img src={landing} className="res_banner_img" alt="" /> */}

        <div className="content">
          <div className="content_text">
            <h3>
           Virtual construction

            </h3>
            <p>
            Decisive Engineering offers a full spectrum of Engineering Solutions designed to the global construction industry. Our team collaborates closely with you to understand your needs and goals, translating them into exceptional results that exceed expectations. 

            </p>
          </div>

          <a href="mailto:email@example.com?subject=Hello&body=I'd like to discuss...">
            {" "}
            <button>get quote now</button>
          </a>
        </div>
      </div>

      <div className="service_res_banner" style={{ marginTop: "5rem" }}>
        <div className="content">
          <div className="content_text">
            <h3>
           Virtual construction
            </h3>
            <p>
            Decisive Engineering delivers comprehensive engineering solutions globally, working closely with you to translate your vision into exceptional, industry-leading results.

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

      <div className="about_our_service">
        <div className="about_our_service_content">
          <h3>About Our Services</h3>
          <p>
          Decisive Engineering aim to facilitate seamless project execution, enhance efficiency, and ensure high-quality results for clients across various industries and project scales.
   </p>
        </div>
        <div className="about_our_service_image">
          <img src="" alt="" />
        </div>
      </div>

      <div className="offers_container_box">
        <div className="what_offer">
          <h3>What we offer</h3>
          <p>
          Decisive Engineering aim to facilitate seamless project execution, enhance efficiency, and ensure high-quality results for clients across various industries and project scales.

          </p>
          <div className="divider"></div>
        </div>

        <div className="offers_container">
          {/* Define the tabs with click handlers to set showTab */}
          <div className="offers">
            <div className="offers_name">
              <h3>BIM - Architectural </h3>
              {showTab === 1 ? (
                <LiaAngleUpSolid
                  className="icon"
                  onClick={() => handleClick(1)}
                />
              ) : (
                <LiaAngleDownSolid
                  className="icon"
                  onClick={() => handleClick(1)}
                />
              )}
            </div>
            {showTab === 1 && (
              <div className="about_offers_name">
                <div className="about_Offers">
                  <p className="about_offer">
                    {showContent[showTab - 1].content}
                  </p>
                </div>
              </div>
            )}

            <div className="offers_name">
              <h3> BIM - Structural</h3>
              {showTab === 2 ? (
                <LiaAngleUpSolid
                  className="icon"
                  onClick={() => handleClick(2)}
                />
              ) : (
                <LiaAngleDownSolid
                  className="icon"
                  onClick={() => handleClick(2)}
                />
              )}
            </div>
            {showTab === 2 && (
              <div className="about_offers_name">
                <div className="about_Offers">
                  <p className="about_offer">
                    {showContent[showTab - 1].content}
                  </p>
                </div>
              </div>
            )}
            <div className="offers_name">
              <h3>BIM - MEP</h3>
              {showTab === 3 ? (
                <LiaAngleUpSolid
                  className="icon"
                  onClick={() => handleClick(3)}
                />
              ) : (
                <LiaAngleDownSolid
                  className="icon"
                  onClick={() => handleClick(3)}
                />
              )}
            </div>
            {showTab === 3 && (
              <div className="about_offers_name">
                <div className="about_Offers">
                  <p className="about_offer">
                    {showContent[showTab - 1].content}
                  </p>
                </div>
              </div>
            )}
            <div className="offers_name">
              <h3>Infrastructure Modeling</h3>
              {showTab === 4 ? (
                <LiaAngleUpSolid
                  className="icon"
                  onClick={() => handleClick(4)}
                />
              ) : (
                <LiaAngleDownSolid
                  className="icon"
                  onClick={() => handleClick(4)}
                />
              )}
            </div>
            {showTab === 4 && (
              <div className="about_offers_name">
                <div className="about_Offers">
                  <p className="about_offer">
                    {showContent[showTab - 1].content}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Display content based on current showTab */}
          {showTab > 0 && (
            <div className="about_offers_name">
              <div className="offers_image">
                
                <img src={showContent[showTab - 1].image} alt="" />
              </div>
            </div>
          )}
        </div>

        {/* mobile and tablet view */}
        <div className="offers_container" id="res_offer">
          <div className="offers">
            <div className="offers_name">
              <h3> BIM - Architectural</h3>
              {showTab === 1 ? (
                <LiaAngleUpSolid
                  className="icon"
                  onClick={() => handleClick(1)}
                />
              ) : (
                <LiaAngleDownSolid
                  className="icon"
                  onClick={() => handleClick(1)}
                />
              )}
            </div>
            {showTab === 1 && (
              <div className="about_offers_name">
                <div className="about_Offers">
                  <p className="about_offer">
                    {showContent[showTab - 1].content}
                  </p>
                </div>
                <div className="offers_image">
                  <img src={showContent[showTab - 1].image} alt="" />
                </div>
              </div>
            )}

            <div className="offers_name">
              <h3>  BIM - Structural </h3>
              {showTab === 2 ? (
                <LiaAngleUpSolid
                  className="icon"
                  onClick={() => handleClick(2)}
                />
              ) : (
                <LiaAngleDownSolid
                  className="icon"
                  onClick={() => handleClick(2)}
                />
              )}
            </div>

            {showTab === 2 && (
              <div className="about_offers_name">
                <div className="about_Offers">
                  <p className="about_offer">
                    {showContent[showTab - 1].content}
                  </p>
                </div>
                <div className="offers_image">
                  <img src={showContent[showTab - 1].image} alt="" />
                </div>
              </div>
            )}
            <div className="offers_name">
              <h3>BIM - MEP</h3>
              {showTab === 3 ? (
                <LiaAngleUpSolid
                  className="icon"
                  onClick={() => handleClick(3)}
                />
              ) : (
                <LiaAngleDownSolid
                  className="icon"
                  onClick={() => handleClick(3)}
                />
              )}
            </div>
            {showTab === 3 && (
              <div className="about_offers_name">
                <div className="about_Offers">
                  <p className="about_offer">
                    {showContent[showTab - 1].content}
                  </p>
                </div>
                <div className="offers_image">
                  <img src={showContent[showTab - 1].image} alt="" />
                </div>
              </div>
            )}
            <div className="offers_name">
              <h3> Infrastructure Modeling </h3>
              {showTab === 4 ? (
                <LiaAngleUpSolid
                  className="icon"
                  onClick={() => handleClick(4)}
                />
              ) : (
                <LiaAngleDownSolid
                  className="icon"
                  onClick={() => handleClick(4)}
                />
              )}
            </div>

            {showTab === 4 && (
              <div className="about_offers_name">
                <div className="about_Offers">
                  <p className="about_offer">
                    {showContent[showTab - 1].content}
                  </p>
                </div>
                <div className="offers_image">
                  <img src={showContent[showTab - 1].image} alt="" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Services;

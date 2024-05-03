import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { LiaAngleDownSolid, LiaAngleUpSolid } from "react-icons/lia";

import "../styleSheets/service.css";
function Services() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when component mounts
  }, []);
  const [showTab, setShowTab] = useState(0);

  const showContent = [
    {
      content:
        "Curabitur molestie sit amet urna at euismod. In non vulputate urna. Nam faucibus est eu lacus ornare, ut cursus massa semper. Curabitur lorem lacus, placerat ut fermentum sit amet, egestas sit amet metus.",
      image: "path/to/image1.jpg", // Update with valid image path
    },
    {
      content:
        "Curabitur molestie sit amet urna at euismod. In non vulputate urna. Nam faucibus est eu lacus ornare, ut cursus massa semper. Curabitur lorem lacus, placerat ut fermentum sit amet, egestas sit amet metus.",

      image: "path/to/image2.jpg",
    },
    {
      content:
        "Curabitur molestie sit amet urna at euismod. In non vulputate urna. Nam faucibus est eu lacus ornare, ut cursus massa semper. Curabitur lorem lacus, placerat ut fermentum sit amet, egestas sit amet metus.",

      image: "path/to/image3.jpg",
    },
    {
      content:
        "Curabitur molestie sit amet urna at euismod. In non vulputate urna. Nam faucibus est eu lacus ornare, ut cursus massa semper. Curabitur lorem lacus, placerat ut fermentum sit amet, egestas sit amet metus.",

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

      <div className="about_our_service">
        <div className="about_our_service_content">
          <h3>About our service</h3>
          <p>
            Curabitur molestie sit amet urna at euismod. In non vulputate urna.
            Nam faucibus est eu lacus ornare, ut cursus massa semper. Curabitur
            lorem lacus, placerat ut fermentum sit amet, egestas sit amet metus.
            Aenean varius vehicula enim, ac pulvinar nulla dapibus ac. Cras
            vehicula diam elit, faucibus pharetra ante dictum eget. Donec non
            consequat mi, ac porta mi. Sed metus lectus, commodo eu pretium nec,
            tempor id orci. Orci varius natoque penatibus et magnis dis
            parturient montes nascetur ridiculus mus. Aenean egestas quam eu ex
            eleifend, id varius tellus lacinia. Morbi quis venenatis felis.
            Suspendisse potenti. In vitae consequat mauris. Donec ornare
            volutpat tellus.
          </p>
        </div>
        <div className="about_our_service_image">
          <img src="" alt="" />
        </div>
      </div>

      <div className="offers_container_box">
        <div className="what_offer">
          <h3>What we Offer</h3>
          <p>
            Curabitur molestie sit amet urna at euismod. In non vulputate urna.
            Nam faucibus est eu lacus ornare, ut cursus massa semper. Curabitur
            lorem lacus, placerat ut fermentum sit amet, egestas sit amet metus
          </p>
          <div className="divider"></div>
        </div>

        <div className="offers_container">
          {/* Define the tabs with click handlers to set showTab */}
          <div className="offers">
            <div className="offers_name">
              <h3>BIM - ARCHITECTURAL</h3>
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
              <h3>Structural Engineering</h3>
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
              <h3>MEP Engineering</h3>
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
              <h3>Support Services</h3>
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
              <h3> BIM - ARCHITECTURAL</h3>
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
              <h3> BIM - STRUCTURAL</h3>
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
              <h3> BIM - MEP</h3>
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
              <h3> Infrastructure Model</h3>
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

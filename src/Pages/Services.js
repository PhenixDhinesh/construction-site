import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { LiaAngleDownSolid } from "react-icons/lia";

import "../styleSheets/service.css";
function Services() {
  const [showDrop, setDrop] = useState(false);
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
          <div className="offers">
            <div className="offers_name">
              <h3> BIM - ARCHITECTURAL</h3>
              <LiaAngleDownSolid
                className="icon"
                onClick={() => setDrop(!showDrop)}
              />
            </div>
            {showDrop && (
              <div className="about_offers_name">
                <div className="about_Offers">
                  <p className="about_offer">
                    Curabitur molestie sit amet urna at euismod. In non
                    vulputate urna. Nam faucibus est eu lacus ornare, ut cursus
                    massa semper. Curabitur lorem lacus, placerat ut fermentum
                    sit amet, egestas sit amet metus.
                  </p>
                </div>
              </div>
            )}

            <div className="offers_name">
              <h3> BIM - STRUCTURAL</h3>
              <LiaAngleDownSolid className="icon" />
            </div>
            <div className="offers_name">
              <h3> BIM - MEP</h3>
              <LiaAngleDownSolid className="icon" />
            </div>
            <div className="offers_name">
              <h3> Infrastructure Model</h3>
              <LiaAngleDownSolid className="icon" />
            </div>
          </div>
          {showDrop && 
          <div className="offers_image"></div>
          
          }
        </div>
        <div className="offers_container" id="res_offer">
          <div className="offers">
            <div className="offers_name">
              <h3> BIM - ARCHITECTURAL</h3>
              <LiaAngleDownSolid
                className="icon"
                onClick={() => setDrop(!showDrop)}
              />
            </div>
            {showDrop && (
              <div className="about_offers_name">
                <div className="about_Offers">
                  <p className="about_offer">
                    Curabitur molestie sit amet urna at euismod. In non
                    vulputate urna. Nam faucibus est eu lacus ornare, ut cursus
                    massa semper. Curabitur lorem lacus, placerat ut fermentum
                    sit amet, egestas sit amet metus.
                  </p>
                  <div className="offers_image"></div>
                </div>
              </div>
            )}

            <div className="offers_name">
              <h3> BIM - STRUCTURAL</h3>
              <LiaAngleDownSolid className="icon" />
            </div>
            <div className="offers_name">
              <h3> BIM - MEP</h3>
              <LiaAngleDownSolid className="icon" />
            </div>
            <div className="offers_name">
              <h3> Infrastructure Model</h3>
              <LiaAngleDownSolid className="icon" />
            </div>
          </div>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Services;

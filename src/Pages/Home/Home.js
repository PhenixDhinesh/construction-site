import React from "react";
import "../../styleSheets/home.css";
import logo from "../../assets/Logo.svg";
import groups from "../../assets/groups.svg";
import map from "../../assets/map.svg";
import architect from "../../assets/architecture.svg";
import engineer from "../../assets/engineering.svg";
import site from "../../assets/site.svg";
import ladder from "../../assets/ladder.svg";
import client1 from "../../assets/client 1.svg";
import client2 from "../../assets/client2.svg";
import client3 from "../../assets/client3.svg";
import client4 from "../../assets/client4.svg";
import whiteLogo from "../../assets/whiteLogo.svg";
import poweredBy from "../../assets/poweredBy.svg";
import menu from '../../assets/menu.svg'
import banner from "../../assets/banner.svg"
import landing from "../../assets/res_banner.svg"
export default function Home() {
  return (
    <div>
      <header className="header">
        <div className="logo_sec">
          <img src={logo} alt="" />
        </div>
        <div className="nav_sec">
          <nav className="nav_link">
            <p>Home</p>
            <p>Our services</p>
            <p>About us</p>
            <p>Contact us</p>
          </nav>
          <button>get quote now</button>
        </div>
        <div className="toggle_icon">
           <img src={menu} alt="" />
        </div>
      </header>
      <div className="banner">
        <img src={banner} className="banner_img" alt="" />
        <img src={landing} className="res_banner_img" alt="" />

        <div className="content">
          <div className="content_text">
            <h3>
              Lorem ipsum is <br />
              simply dummy text
            </h3>
            <p>
              Integer in est elit. Mauris placerat blandit massa quis <br />{" "}
              aliquam. Donec efficitur risus id sapien lobortis, vel <br />{" "}
              tempor ligula mollis. Aenean vitae nibh nec lacus <br /> molestie
              lobortis.
            </p>
          </div>

          <button>get quote now</button>
        </div>
      </div>
      <div className="achivement_container">
        <div className="text">
          <h3>
            Lorem ipsum is <br />
            simply dummy text
          </h3>
          <p>
            Integer in est elit. Mauris placerat blandit massa quis <br />{" "}
            aliquam. Donec efficitur risus
          </p>
        </div>
        <div className="achivement_grid">
          <div className="achivements">
            <div className="box">
              <img src={groups} alt="" />
            </div>
            <p className="counts">10,000+</p>
            <p className="about">Satisfied client</p>
          </div>
          <div className="achivements">
            <div className="box">
              <img src={engineer} alt="" />
            </div>
            <p className="counts">4700+</p>
            <p className="about">Skilled workers</p>
          </div>
          <div className="achivements">
            <div className="box">
              <img src={architect} alt="" />
            </div>
            <p className="counts">500+</p>
            <p className="about">project complited</p>
          </div>
          <div className="achivements">
            <div className="box">
              <img src={map} alt="" />
            </div>
            <p className="counts">34</p>
            <p className="about">states</p>
          </div>
        </div>
      </div>
      <div className="core_values_container">
        <h3>Core vlaues</h3>
        <div class="core_values">
          <div class="animation_scroll">
            <div>team work</div>
            <div>responsibility</div>
            <div>commitment</div>
            <div>reliability</div>
            <div>quality</div>
          </div>
        </div>
      </div>

      <div className="virtual_construction_contianer">
        <div className="virtual_construction_box">
          <div className="virtual_construction_title">
            <h3>Lorem ipsum is simply dummy text</h3>
            <p>
              Integer in est elit. Mauris placerat blandit massa quis <br />{" "}
              aliquam. Donec efficitur risus
            </p>
          </div>
          <div className="virtual_construction_cards">
            <div class="card" style={{ width: "18rem" }}>
              <img class="card-img-top" src={site} alt="" />
              <div class="card-body">
                <h5 class="card-title">Virtual construction</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.Some quick example text to
                  build on the card title and make up the bulk of the card's
                  content.Some quick example text to build on.
                </p>
                <button>read more...</button>
              </div>
            </div>
            <div class="card" style={{ width: "18rem" }}>
              <img class="card-img-top" src={site} alt="" />
              <div class="card-body">
                <h5 class="card-title">Virtual construction</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.Some quick example text to
                  build on the card title and make up the bulk of the card's
                  content.Some quick example text to build on.
                </p>
                <button>read more...</button>
              </div>
            </div>
            <div class="card" style={{ width: "18rem" }}>
              <img class="card-img-top" src={site} alt="" />
              <div class="card-body">
                <h5 class="card-title">Virtual construction</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.Some quick example text to
                  build on the card title and make up the bulk of the card's
                  content.Some quick example text to build on.
                </p>
                <button>read more...</button>
              </div>
            </div>
            <div class="card" style={{ width: "18rem" }}>
              <img class="card-img-top" src={site} alt="" />
              <div class="card-body">
                <h5 class="card-title">Virtual construction</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.Some quick example text to
                  build on the card title and make up the bulk of the card's
                  content.Some quick example text to build on.
                </p>
                <button>read more...</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="build_container">
        <div className="virtual_construction_title">
          <h3>Let us help you on build</h3>
          <p>
            Integer in est elit. Mauris placerat blandit massa quis <br />{" "}
            aliquam. Donec efficitur risus
          </p>
        </div>
        <div className="image">
          <img src={ladder} alt="" />
        </div>
      </div>

      <div className="client_words_container">
        <div className="client_words">
          <h3>Few words from Our Clints</h3>
          <div className="client_container">
            <div className="card">
              <div className="clients_grid">
                <img src={client1} alt="" />
                <h3>raju ram</h3>
                <p>CEO, Raju builders</p>
              </div>
             <div className="card-body">
              <p>
                Curabitur molestie sit amet urna at euismod. In non vulputate
                urna. Nam faucibus est eu lacus ornare, ut cursus massa semper.
                Curabitur lorem lacus, placerat ut fermentum sit amet, egestas
                sit amet metus. Aenean varius vehicula enim, ac pulvinar nulla
                dapibus ac.
              </p>
             </div>
            
            </div>
            <div className="card">
              <div className="clients_grid">
                <img src={client2} alt="" />
                <h3>Nadarajan</h3>
                <p>Member, NRT Apartments</p>
              </div>
              <div className="card-body">
              <p>
                Curabitur molestie sit amet urna at euismod. In non vulputate
                urna. Nam faucibus est eu lacus ornare, ut cursus massa semper.
                Curabitur lorem lacus, placerat ut fermentum sit amet, egestas
                sit amet metus. Aenean varius vehicula enim, ac pulvinar nulla
                dapibus ac.
              </p>
              </div>
            
            </div>
            <div className="card">
              <div className="clients_grid">
                <img src={client3} alt="" />
                <h3>Abdul rahman</h3>
                <p>MD, Abdhul real Estates</p>
              </div>
              <div className="card-body"><p>
                Curabitur molestie sit amet urna at euismod. In non vulputate
                urna. Nam faucibus est eu lacus ornare, ut cursus massa semper.
                Curabitur lorem lacus, placerat ut fermentum sit amet, egestas
                sit amet metus. Aenean varius vehicula enim, ac pulvinar nulla
                dapibus ac.
              </p></div>
              
            </div>
            <div className="card">
              <div className="clients_grid">
                <img src={client4} alt="" />
                <h3>Dr.P Kumar</h3>
                <p>Founder PKG Hospital</p>
              </div>
              <div className="card-body">
              <p>
                Curabitur molestie sit amet urna at euismod. In non vulputate
                urna. Nam faucibus est eu lacus ornare, ut cursus massa semper.
                Curabitur lorem lacus, placerat ut fermentum sit amet, egestas
                sit amet metus. Aenean varius vehicula enim, ac pulvinar nulla
                dapibus ac.
              </p>
              </div>
             
            </div>
          </div>
        </div>
      </div>

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
              <p>Home</p>
              <p>Our services</p>
              <p>About us</p>
              <p>Contact us</p>
              <p>Get quote now</p>
              <p>Back to top</p>
            </div>

            <div className="contact-Container">
              <p>+91 983432423</p>
              <p>Contact@gmail.com</p>
              <p style={{ width: "349px" }}>
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
                <p style={{fontSize:"8px"}}>Powered by</p>
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
                <p style={{fontSize:"8px"}}>Powered by</p>
                <img src={poweredBy} alt="" />
              </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

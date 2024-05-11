import React,{useEffect} from "react";
import "../styleSheets/home.css";
import groups from "../assets/groups.svg";
import map from "../assets/map.svg";
import architect from "../assets/architecture.svg";
import engineer from "../assets/engineering.svg";
import site from "../assets/site.svg";
import ladder from "../assets/ladder.svg";
import client1 from "../assets/client 1.svg";
import client2 from "../assets/client2.svg";
import client3 from "../assets/client3.svg";
import client4 from "../assets/client4.svg";
import Header from "./Header";
import Footer from "./Footer";

export default function Home() {

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when component mounts
  }, []);
  return (
    <div>
    <Header/>

    <div className="banner" style={{marginTop:"8rem"}}>
        {/* <img src={banner} className="banner_img" alt="" /> */}
        {/* <img src={landing} className="res_banner_img" alt="" /> */}

        <div className="content">
          <div className="content_text">
            <h3>
            Engineered with Precision. Delivered with Excellence
            
            </h3>
            <p>
             We prioritise rigorous planning and execution, creating extraordinary outcomes, and bringing your vision to life with the greatest level of quality and expertise.
            </p>
          </div>

          <a href="mailto:email@example.com?subject=Hello&body=I'd like to discuss..." className="a_link">
            {" "}
            <button>get quote now</button>
          </a>
        </div>
      </div>

      <div className="res_banner" style={{marginTop:"8rem"}}>
        <div className="content">
          <div className="content_text">
            <h3>
            Engineered with Precision. Delivered with Excellence
            </h3>
            <p>
            We prioritise rigorous planning and execution, creating extraordinary outcomes, and bringing your vision to life with the greatest level of quality and expertise
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

      
      <div className="achivement_container" >
        <div className="text">
          <h3>
          Building the New Realty
          </h3>
          <p>
          Developing memorable and distinct structures that are sophisticated and renowned
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
              Integer in est elit. Mauris placerat blandit massa quis 
              aliquam. Donec efficitur risus
            </p>
          </div>
          <div className="virtual_construction_cards">
            <div class="card" id="first_card">
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
            <div class="card">
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
            <div class="card">
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
            <div class="card" id="last-card">
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
        <div className="virtual_construction_title build">
          <h3>Let us help you Build</h3>
          <p>
          From dream to reality, let's build it together. We make the process seamless.

          </p>
        </div>
        <div className="image">
          <img src={ladder} alt="" />
        </div>
      </div>

       

        <div className="client_words">
          <div className="client_words_container" >
           <h3 style={{textAlign:"center"}}>Few words from Our Clients</h3>
          </div>

          <div className="client_container">
            <div className="card first_card">
              <div className="clients_grid">
                <img src={client1} alt="" />
                <h3>raju ram</h3>
                <p>CEO, Raju builders</p>
              </div>
              <div className="card-body">
                <p className="about_client">
                  Curabitur molestie sit amet urna at euismod. In non vulputate
                  urna. Nam faucibus est eu lacus ornare, ut cursus massa
                  semper. Curabitur lorem lacus, placerat ut fermentum sit amet,
                  egestas sit amet metus. Aenean varius vehicula enim, ac
                  pulvinar nulla dapibus ac.
                </p>
              </div>
            </div>
            <div className="card" id="card__contain">
              <div className="clients_grid">
                <img src={client2} alt="" />
                <p>Member, NRT Apartments</p>
                <h3>Nadarajan</h3>

              </div>
              <div className="card-body">
                <p className="about_client">
                  Curabitur molestie sit amet urna at euismod. In non vulputate
                  urna. Nam faucibus est eu lacus ornare, ut cursus massa
                  semper. Curabitur lorem lacus, placerat ut fermentum sit amet,
                  egestas sit amet metus. Aenean varius vehicula enim, ac
                  pulvinar nulla dapibus ac.
                </p>
              </div>
            </div>
            <div className="card" id="card__contain">
              <div className="clients_grid">
                <img src={client3} alt="" />
                <h3>Abdul rahman</h3>
                <p>MD, Abdhul real Estates</p>
              </div>
              <div className="card-body">
                <p className="about_client">
                  Curabitur molestie sit amet urna at euismod. In non vulputate
                  urna. Nam faucibus est eu lacus ornare, ut cursus massa
                  semper. Curabitur lorem lacus, placerat ut fermentum sit amet,
                  egestas sit amet metus. Aenean varius vehicula enim, ac
                  pulvinar nulla dapibus ac.
                </p>
              </div>
            </div>
            <div className="card card__contain" id="last-card">
              <div className="clients_grid">
                <img src={client4} alt="" />
                <h3>Dr.P Kumar</h3>
                <p>Founder PKG Hospital</p>
              </div>
              <div className="card-body">
                <p className="about_client">
                  Curabitur molestie sit amet urna at euismod. In non vulputate
                  urna. Nam faucibus est eu lacus ornare, ut cursus massa
                  semper. Curabitur lorem lacus, placerat ut fermentum sit amet,
                  egestas sit amet metus. Aenean varius vehicula enim, ac
                  pulvinar nulla dapibus ac.
                </p>
              </div>
            </div>
          </div>
        </div>

        <Footer/>


    </div>
  );
}
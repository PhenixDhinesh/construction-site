import React,{useEffect} from 'react'
import Header from './Header'
import Footer from './Footer'
import ladder from '../assets/ladder.svg'
import '../styleSheets/about.css'
function About() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when component mounts
  }, []);
  return (
    <div>
      <Header/>

      <div className="about_banner" style={{ marginTop: "6.3rem" }}>
        {/* <img src={banner} className="banner_img" alt="" /> */}
        {/* <img src={landing} className="res_banner_img" alt="" /> */}

        <div className="content">
          <div className="content_text">
            <h3>
            Building Trust, Building Excellence
            </h3>
            <p>
            We're a team of passionate professionals dedicated to exceeding expectations and fostering lasting relationships with our clients. Explore our story and discover what sets us apart.

            </p>
          </div>

          <a href="mailto:email@example.com?subject=Hello&body=I'd like to discuss...">
            {" "}
            <button>get quote now</button>
          </a>
        </div>
      </div>

      <div className="about_res_banner" style={{ marginTop: "5rem" }}>
        <div className="content">
          <div className="content_text">
            <h3>
            Building Trust, Building Excellence

            </h3>
            <p>
            We're a team of passionate professionals dedicated to exceeding expectations and fostering lasting relationships with our clients. Explore our story and discover what sets us apart.

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


      <div className='about_container'>
        <div className='about_container_box'>
            <h3>About us</h3>
            <p>
            Decisive is a top engineering solutions provider with various services, including virtual construction, BIM modelling, structural expertise, building infrastructure systems, documentation, pre-bid and feasibility services. Our professional engineers provide data-rich 3D models, structural analysis, and extensive documentation to help clients make educated decisions. We also give pre-bid and feasibility surveys to assist with project difficulties. Our dedication to cultivating true collaboration and trust is what distinguishes us from others.
              </p>
            <div className='about_image'>
                <img src={ladder} alt="" className='ladder_image'/>
            </div>
        </div>
      </div>
      <div className='vision_container'>
        <div className='vision_container_box'>
        <div className='vision'>
            <h3>vision</h3>
            <p>  To be the most reliable, innovative partner and solution provider in the global construction Industry.

</p>  </div>
        <div className='mission'>
            <h3>mission</h3>
            <p>
            We strongly believe, our future depends on the perfect balance between achieving our targets and the contribution that we can make to the socio-economic and environmental development of the communities

</p>        </div>
        </div>
        
      </div>
      <Footer/>
    </div>
  )
}

export default About

import React,{useEffect} from 'react'
import Header from './Header'
import Footer from './Footer'
import phone from "../assets/call.svg"
import mail from "../assets/mail.svg"
import store  from "../assets/store.svg"
import location from "../assets/locationMap.svg"
import '../styleSheets/contact.css'
function ContactUs() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when component mounts
  }, []);
  return (
    <div>
      <Header/>
      <div className='contact_container_box'>
        <div className='map_image'>
          <img src={location} alt="" className='location_map'/>
        </div>
      </div>
     
     <div className='contact_details_container'>
      <div className='contact_details_container_box'>
        <div className='contact_container'>
          <div className='contact_icon'>
            <div className='contact_icon_box'><img src={phone} alt="" /></div>
            <h3>Phone</h3>
          </div>
          <div className='contact_detail'>
            <h3>Mr.Arul</h3>
            <p>+91 81245 94875</p>
          </div>
        </div>
        <div className='contact_container'>
          <div className='contact_icon'>
            <div className='contact_icon_box'><img src={mail} alt="" /></div>
            <h3>Email</h3>
          </div>
          <div className='contact_detail'>
            <h3>Mr.Arul</h3>
            <p>contact@company.com</p>
          </div>
        </div>
        <div className='contact_container'>
          <div className='contact_icon'>
            <div className='contact_icon_box'> <img src={store} alt="" /></div>
            <h3>Address</h3>
          </div>
          <div className='contact_detail'>
            {/* <h3>Mr.Arul</h3> */}
            <p>+SF NO 385 4 POST OFF EAST Tharamangalam, Salem
- 636 502,
India</p>
          </div>
        </div>

      </div>
     </div>

      <Footer/>
    </div>
  )
}

export default ContactUs

import React,{useState} from 'react'
import menu from "../assets/menu.svg";
import { FaAngleRight } from "react-icons/fa6";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { LiaAngleDownSolid, LiaAngleUpSolid } from "react-icons/lia";

import logo from "../assets/Logo.svg";
import { Link } from 'react-router-dom';

export default function Header() {

    const [showBox, setShowBox] = useState(false);
    const [open, setOpen] = useState(false);
    const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  
    const toggleDrawer = (newOpen) => () => {
      setOpen(newOpen);
    };
    const toggleServicesDropdown = (e) => {
      e.stopPropagation();
      setShowServicesDropdown(!showServicesDropdown);
    };
  
    const handleMouseEnter = () => {
      setShowBox(true);
    };
  
    const handleMouseLeave = () => {
      setShowBox(false);
    };
  
  
      const drawerList = (
        <Box sx={{ width: 300 }} role="presentation">
          <div className="offcanvas_container">
            <List>
              <h2>Menu</h2>
              <div className="offcanvas_lists">
              <Link to="/" style={{textDecoration:"none",color:"#000"}}><ListItem onClick={toggleDrawer(false)}>Home</ListItem></Link>
              <ListItem onClick={toggleServicesDropdown} className="off_service">
                <p>Our Service</p>
              
                {showServicesDropdown ? (
                <LiaAngleUpSolid /> // Display up arrow if true
              ) : (
                <LiaAngleDownSolid /> // Display down arrow if false
              )}
              </ListItem>
              {showServicesDropdown && (
                <div className="Off_service_container">
                  <ListItem className="Off_services" onClick={toggleDrawer(false)}>
                  <Link to="/service" style={{textDecoration:"none",color:"#000"}}> <h3 style={{fontSize:"16px",fontWeight:"400"}}>Virtual construction</h3></Link>
                    <FaAngleRight />
                  </ListItem>
                  <ListItem className="Off_services" onClick={toggleDrawer(false)}>
                  <Link to="/service" style={{textDecoration:"none",color:"#000"}}><h3 style={{fontSize:"16px",fontWeight:"400"}}>Structural engineering service</h3></Link>
                    <FaAngleRight />
                  </ListItem>
                  <ListItem className="Off_services" onClick={toggleDrawer(false)}>
                  <Link to="/service" style={{textDecoration:"none",color:"#000"}}> <h3 style={{fontSize:"16px",fontWeight:"400"}}>MEP engineering service</h3></Link>
                    <FaAngleRight />
                  </ListItem>
                  <ListItem className="Off_services" onClick={toggleDrawer(false)}>
                  <Link to="/service" style={{textDecoration:"none",color:"#000"}}><h3 style={{fontSize:"16px",fontWeight:"400"}}>Support service</h3></Link>
                    <FaAngleRight />
                  </ListItem>
                </div>
              )}
              <Link to="/about" style={{textDecoration:"none",color:"#000"}}> <ListItem onClick={toggleDrawer(false)}>About us</ListItem></Link>
              <Link to="/contact" style={{textDecoration:"none",color:"#000"}}><ListItem onClick={toggleDrawer(false)}>Contact us</ListItem></Link>
              </div>
            </List>
          </div>
        </Box>
      )
    
  return (
    <div>
            <header className="header">
        <div className="logo_sec">
          <img src={logo} alt="" />
        </div>
        <div className="nav_sec">
          <nav className="nav_link">
            <Link to="/" style={{textDecoration:"none",color:"#000"}}><p className='links'>Home</p></Link>
  
          <p className='show_service'     onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave} >Our services</p>
          {showServicesDropdown && 
               
        <div className="service_container">
             <div className="services">
           <Link to="/service" style={{textDecoration:"none",color:"#000"}}>
            <h3 style={{fontWeight:"400",fontSize:"16px"}}>virtula construction</h3></Link>
            <FaAngleRight />
          </div>
          <div className="services">
          <Link to="/service" style={{textDecoration:"none",color:"#000"}}> <h3 style={{fontWeight:"400",fontSize:"16px"}}>structural engineering service</h3></Link>
            <FaAngleRight />
          </div>
          <div className="services">
          <Link to="/service" style={{textDecoration:"none",color:"#000"}}> <h3 style={{fontWeight:"400",fontSize:"16px"}}>MEP engineering service</h3></Link>
            <FaAngleRight />
          </div>
          <div className="services">
          <Link to="/service" style={{textDecoration:"none",color:"#000"}}><h3 style={{fontWeight:"400",fontSize:"16px"}}>support service</h3></Link>
            <FaAngleRight />
          </div>
        </div>
          }

          <Link to="/about" style={{textDecoration:"none",color:"#000"}}> <p>About us</p></Link>
          <Link to="/contact" style={{textDecoration:"none",color:"#000"}}> <p>Contact us</p></Link>
          </nav>
          <button>get quote now</button>
        </div>
        <div className="toggle_icon">
        <img src={menu} alt="" onClick={toggleDrawer(true)} />
      </div>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {drawerList}
      </Drawer>
      </header>

   
      <div className="banner">
        {/* <img src={banner} className="banner_img" alt="" /> */}
        {/* <img src={landing} className="res_banner_img" alt="" /> */}

        <div className="content">
          <div className="content_text">
            <h3>
              Lorem ipsum is <br />
              simply dummy text
            </h3>
            <p>
              Integer in est elit. Mauris placerat blandit massa quis 
              aliquam. Donec efficitur risus id sapien lobortis, vel
              tempor ligula mollis. Aenean vitae nibh nec lacus  molestie
              lobortis.
            </p>
          </div>

          <button>get quote now</button>
        </div>
      </div>

      <div className="res_banner">

        <div className="content">
          <div className="content_text">
            <h3>
              Lorem ipsum is <br />
              simply dummy text
            </h3>
            <p>
              Integer in est elit. Mauris placerat blandit massa quis 
              aliquam. Donec efficitur risus id sapien lobortis, vel
              tempor ligula mollis. Aenean vitae nibh nec lacus  molestie
              lobortis.
            </p>
          </div>

          <button>get quote now</button>
        </div>
      </div>
    </div>
  )
}

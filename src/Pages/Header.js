import React,{useState} from 'react'
import menu from "../assets/menu.svg";
import banner from "../assets/banner.svg";
import landing from "../assets/res_banner.svg";
import { FaAngleRight } from "react-icons/fa6";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { LiaAngleDownSolid } from "react-icons/lia";
import logo from "../assets/Logo.svg";

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
  
  
      const drawerList = (
        <Box sx={{ width: 300 }} role="presentation">
          <div className="offcanvas_container">
            <List>
              <h2>Menu</h2>
              <div className="offcanvas_lists">
              <ListItem onClick={toggleDrawer(false)}>Home</ListItem>
              <ListItem onClick={toggleServicesDropdown} className="off_service">
                <p>Our Service</p>
                <LiaAngleDownSolid />
              </ListItem>
              {showServicesDropdown && (
                <div className="Off_service_container">
                  <ListItem className="Off_services">
                    <h3>Virtual construction</h3>
                    <FaAngleRight />
                  </ListItem>
                  <ListItem className="Off_services">
                    <h3>Structural engineering service</h3>
                    <FaAngleRight />
                  </ListItem>
                  <ListItem className="Off_services">
                    <h3>MEP engineering service</h3>
                    <FaAngleRight />
                  </ListItem>
                  <ListItem className="Off_services">
                    <h3>Support service</h3>
                    <FaAngleRight />
                  </ListItem>
                </div>
              )}
              <ListItem onClick={toggleDrawer(false)}>About us</ListItem>
              <ListItem onClick={toggleDrawer(false)}>Contact us</ListItem>
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
            <p>Home</p>
            <p onClick={() => setShowBox(!showBox)}>Our services</p>
            <p>About us</p>
            <p>Contact us</p>
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

      {showBox && (
        <div className="service_container">
          <div className="services">
            <h3>virtula construction</h3>
            <FaAngleRight />
          </div>
          <div className="services">
            <h3>structural engineering service</h3>
            <FaAngleRight />
          </div>
          <div className="services">
            <h3>MEP engineering service</h3>
            <FaAngleRight />
          </div>
          <div className="services">
            <h3>support service</h3>
            <FaAngleRight />
          </div>
        </div>
      )}

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

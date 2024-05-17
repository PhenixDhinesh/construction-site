import React, { useState, useRef } from "react";
import menu from "../assets/menu.svg";
import { FaAngleRight } from "react-icons/fa6";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { LiaAngleDownSolid, LiaAngleUpSolid } from "react-icons/lia";
import logo from "../assets/DE_logo clr.svg";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [showBox, setShowBox] = useState(false);
  const [open, setOpen] = useState(false);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const drawerRef = useRef(null);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  const toggleServicesDropdown = (e) => {
    e.stopPropagation();
    setShowServicesDropdown(!showServicesDropdown);
  };

  const timerRef = useRef(null);

  const handleMouseEnter = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    setShowBox(true);
  };

  const handleMouseLeave = () => {
    timerRef.current = setTimeout(() => {
      setShowBox(false);
    }, 200); // Adjust delay as needed
  };
  const location =useLocation();
  const currentpath = location.pathname;
  const isActive = (path)=>currentpath === path
  const drawerList = (
    <Box sx={{ width: 300 }} role="presentation">
      <div className="offcanvas_container">
        <List>
          <h2>Menu</h2>
          <div className="offcanvas_lists">
            <Link to="/" className={`${isActive('/')? 'activeLink' : 'canvasLink'}`}>
              <ListItem onClick={toggleDrawer(false)}>
                <p style={{ fontSize: "16px" }}> Home </p>
              </ListItem>
            </Link>
            <Link to="/about" className={`${isActive('/about')? 'activeLink' : 'canvasLink'}`}>
              {" "}
              <ListItem onClick={toggleDrawer(false)}>
                <p style={{ fontSize: "16px" }}>About us</p>
              </ListItem>
            </Link>
            <ListItem onClick={toggleServicesDropdown} className={`${isActive('/service')? 'activeLink' : 'off_service'}`}>
              <p style={{ fontSize: "16px" }}>Our Service</p>
              <div style={{ marginTop: "-4px",marginLeft:"10px" }}>
                {showServicesDropdown ? (
                  <LiaAngleUpSolid /> // Display up arrow if true
                ) : (
                  <LiaAngleDownSolid /> // Display down arrow if false
                )}
              </div>
            </ListItem>
            {showServicesDropdown && (
              <div className="Off_service_container">
                <ListItem
                  className="Off_services"
                  onClick={toggleDrawer(false)}
                >
                  <Link
                    to="/service"
                    style={{ textDecoration: "none", color: "#000" }}
                  >
                    {" "}
                    <h3 style={{ fontSize: "16px", fontWeight: "400" }} className="service_text">
                      Virtual construction
                    </h3>
                  </Link>
                  <FaAngleRight />
                </ListItem>
                <ListItem
                  className="Off_services"
                  onClick={toggleDrawer(false)}
                >
                  <Link
                    to="/service/structural"
                    style={{ textDecoration: "none", color: "#000" }}
                  >
                    <h3 style={{ fontSize: "16px", fontWeight: "400" }} className="service_text">
                      Structural engineering service
                    </h3>
                  </Link>
                  <FaAngleRight />
                </ListItem>
                <ListItem
                  className="Off_services"
                  onClick={toggleDrawer(false)}
                >
                  <Link
                    to="/service/mep"
                    style={{ textDecoration: "none", color: "#000" }}
                  >
                    {" "}
                    <h3 style={{ fontSize: "16px", fontWeight: "400" }} className="service_text">
                      MEP engineering service
                    </h3>
                  </Link>
                  <FaAngleRight />
                </ListItem>
                <ListItem
                  className="Off_services"
                  onClick={toggleDrawer(false)}
                >
                  <Link
                    to="/service/support"
                    style={{ textDecoration: "none", color: "#000" }}
                  >
                    <h3 style={{ fontSize: "16px", fontWeight: "400" }} className="service_text">
                      Support service
                    </h3>
                  </Link>
                  <FaAngleRight />
                </ListItem>
              </div>
            )}
          
            <Link
              to="/contact"
              className={`${isActive('/contact')? 'activeLink' : 'canvasLink'}`}
            >
              <ListItem onClick={toggleDrawer(false)}>
                <p style={{ fontSize: "16px" }}>Contact us</p>
              </ListItem>
            </Link>
          </div>
        </List>
      </div>
    </Box>
  );

  return (
    <div>
      <div className="header-part">
        <header
          className="header navbar-expand-lg navbar-dark ftco_navbar ftco-navbar-light site-navbar-target navbar-fixed-top"
          id="ftco-navbar"
        >
          <div className="logo_sec">
            <a href="https://www.decisiveengg.com/" target="blank">
              <img src={logo} alt="" />
            </a>
          </div>
          <div className="nav_sec">
            <nav className="nav_link">
              <Link to="/" className={`${isActive('/')? 'activeLink' : 'canvasLink'}`}>
                <p className="links">Home</p>
              </Link>
              <Link
                to="/about"
                className={`${isActive('/about')? 'activeLink' : 'canvasLink'}`}
              >
                {" "}
                <p>About us</p>
              </Link>
              <div
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <p  className={`${isActive('/service')? 'activeLink' : 'canvasLink'}`}>Our services</p>
                {showBox && (
                  <div className="service_container">
                    <div className="services">
                      <Link
                        to="/service"
                        style={{ textDecoration: "none", color: "#000" }}
                      >
                        <h3 style={{ fontWeight: "400", fontSize: "16px" }} className="service_text">
                        Virtual construction
                        </h3>
                      </Link>
                      <FaAngleRight />
                    </div>
                    <div className="services">
                      <Link
                        to="/service/structural"
                        style={{ textDecoration: "none", color: "#000" }}
                      >
                        {" "}
                        <h3 style={{ fontWeight: "400", fontSize: "16px" }} className="service_text">
                          structural engineering service
                        </h3>
                      </Link>
                      <FaAngleRight />
                    </div>
                    <div className="services">
                      <Link
                        to="/service/mep"
                        style={{ textDecoration: "none", color: "#000" }}
                      >
                        {" "}
                        <h3 style={{ fontWeight: "400", fontSize: "16px" }} className="service_text">
                          MEP engineering service
                        </h3>
                      </Link>
                      <FaAngleRight />
                    </div>
                    <div className="services">
                      <Link
                        to="/service/support"
                        style={{ textDecoration: "none", color: "#000" }}
                      >
                        <h3 style={{ fontWeight: "400", fontSize: "16px" }} className="service_text">
                          support service
                        </h3>
                      </Link>
                      <FaAngleRight />
                    </div>
                  </div>
                )}
              </div>

            
              <Link
                to="/contact"
                className={`${isActive('/contact')? 'activeLink' : 'canvasLink'}`}
              >
                {" "}
                <p>Contact us</p>
              </Link>
            </nav>
            <div>
            <a href="mailto:email@example.com?subject=Hello&body=I'd like to discuss...">
              {" "}
              <button style={{width:"150px"}}>get quote now</button>
            </a>
            </div>
           
          </div>
          <div className="toggle_icon">
            <img src={menu} alt="" onClick={toggleDrawer(true)} />
          </div>
          <Drawer open={open} onClose={toggleDrawer(false)} anchor="right">
            {drawerList}
          </Drawer>
        </header>
      </div>
    </div>
  );
}

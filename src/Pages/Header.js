import React, { useState, useRef } from "react";
import menu from "../assets/menu.svg";
import { FaAngleRight } from "react-icons/fa6";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { LiaAngleDownSolid, LiaAngleUpSolid } from "react-icons/lia";

import logo from "../assets/DE logo1 2.svg";
import { Link } from "react-router-dom";

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

  const drawerList = (
    <Box sx={{ width: 300 }} role="presentation">
      <div className="offcanvas_container">
        <List>
          <h2>Menu</h2>
          <div className="offcanvas_lists">
            <Link to="/" style={{ textDecoration: "none", color: "#000" }}>
              <ListItem onClick={toggleDrawer(false)}><p style={{fontSize:"16px"}}> Home </p></ListItem>
            </Link>
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
                <ListItem
                  className="Off_services"
                  onClick={toggleDrawer(false)}
                >
                  <Link
                    to="/service"
                    style={{ textDecoration: "none", color: "#000" }}
                  >
                    {" "}
                    <h3 style={{ fontSize: "16px", fontWeight: "400" }}>
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
                    to="/service"
                    style={{ textDecoration: "none", color: "#000" }}
                  >
                    <h3 style={{ fontSize: "16px", fontWeight: "400" }}>
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
                    to="/service"
                    style={{ textDecoration: "none", color: "#000" }}
                  >
                    {" "}
                    <h3 style={{ fontSize: "16px", fontWeight: "400" }}>
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
                    to="/service"
                    style={{ textDecoration: "none", color: "#000" }}
                  >
                    <h3 style={{ fontSize: "16px", fontWeight: "400" }}>
                      Support service
                    </h3>
                  </Link>
                  <FaAngleRight />
                </ListItem>
              </div>
            )}
            <Link to="/about" style={{ textDecoration: "none", color: "#000" }}>
              {" "}
              <ListItem onClick={toggleDrawer(false)}><p style={{fontSize:"16px"}}>About us</p></ListItem>
            </Link>
            <Link
              to="/contact"
              style={{ textDecoration: "none", color: "#000" }}
            >
              <ListItem onClick={toggleDrawer(false)}><p style={{fontSize:"16px"}}>Contact us</p></ListItem>
            </Link>
          </div>
        </List>
      </div>
    </Box>
  );

  return (
    <div>
<div className="header-part">
<header className="header">
        <div className="logo_sec">
          <a href="www.decisiveengg.com" target="blank"><img src={logo} alt="" /></a>
        </div>
        <div className="nav_sec">
          <nav className="nav_link">
            <Link to="/" style={{ textDecoration: "none", color: "#000" }}>
              <p className="links">Home</p>
            </Link>
            <div
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <p>Our services</p>
              {showBox && (
                <div className="service_container">
                  <div className="services">
                    <Link
                      to="/service"
                      style={{ textDecoration: "none", color: "#000" }}
                    >
                      <h3 style={{ fontWeight: "400", fontSize: "16px" }}>
                        virtula construction
                      </h3>
                    </Link>
                    <FaAngleRight />
                  </div>
                  <div className="services">
                    <Link
                      to="/service"
                      style={{ textDecoration: "none", color: "#000" }}
                    >
                      {" "}
                      <h3 style={{ fontWeight: "400", fontSize: "16px" }}>
                        structural engineering service
                      </h3>
                    </Link>
                    <FaAngleRight />
                  </div>
                  <div className="services">
                    <Link
                      to="/service"
                      style={{ textDecoration: "none", color: "#000" }}
                    >
                      {" "}
                      <h3 style={{ fontWeight: "400", fontSize: "16px" }}>
                        MEP engineering service
                      </h3>
                    </Link>
                    <FaAngleRight />
                  </div>
                  <div className="services">
                    <Link
                      to="/service"
                      style={{ textDecoration: "none", color: "#000" }}
                    >
                      <h3 style={{ fontWeight: "400", fontSize: "16px" }}>
                        support service
                      </h3>
                    </Link>
                    <FaAngleRight />
                  </div>
                </div>
              )}
            </div>

            <Link to="/about" style={{ textDecoration: "none", color: "#000" }}>
              {" "}
              <p>About us</p>
            </Link>
            <Link
              to="/contact"
              style={{ textDecoration: "none", color: "#000" }}
            >
              {" "}
              <p>Contact us</p>
            </Link>
          </nav>
          <a href="mailto:email@example.com?subject=Hello&body=I'd like to discuss...">
            {" "}
            <button>get quote now</button>
          </a>
        </div>
        <div className="toggle_icon">
          <img src={menu} alt="" onClick={toggleDrawer(true)} />
        </div>
        <Drawer open={open} onClose={toggleDrawer(false)}>
          {drawerList}
        </Drawer>
      </header>
</div>


     
    </div>
  );
}

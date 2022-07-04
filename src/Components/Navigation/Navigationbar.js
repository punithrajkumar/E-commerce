import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Image, Navbar, Nav, Container } from "react-bootstrap";
import "./Navigationbar.css";
import NavigationData from "../../Variables/NavigationData";
import NewNavigationbar from "./NewNavigationbar";
import Bitcoin from "./Bitcoin.jpg";
import Searchbox from "../Header/Searchbox";
import "./Navigationbar.css";

const Navigationbar = () => {
  return (
    <Navbar className="header-style" sticky="top" expand="xxl" variant="dark">
      <Navbar.Brand href="https://www.youtube.com/channel/UCOduyRmAYKH7nORCscpwoNA">
        <Image className="img-shape" src={Bitcoin} width="38px" height="38px" />
        PRK hub
      </Navbar.Brand>
      <Navbar.Toggle
        className="navtoggle"
        aria-controls="basic-navbar-nav navbarScroll"
      />
      {/* <div className="sBox"> */}
      <Searchbox className="sBox"/>
      {/* </div> */}
      <Container fluid>
        <Navbar.Collapse id="basic-navbar-nav navbarScroll">
          <Nav variant="dark" className="navcolor">
            {Object.entries(NavigationData).map(([key, value], index) => (
              <NewNavigationbar
                className="navcolor"
                NewNavigationKey={key}
                NewNavigationValue={value}
                key={index}
              />
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigationbar;

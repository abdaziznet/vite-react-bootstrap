import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAlignJustify,
  faCircleUser,
} from "@fortawesome/free-solid-svg-icons";
import { Navbar, Button, Nav } from "react-bootstrap";
import "./navbar.css";

class NavBar extends React.Component {
  render() {
    return (
      <Navbar
        bg="primary"
        data-bs-theme="dark"
        className="navbar shadow-sm p-3 mb-5 rounded"
        expand
      >
        <Button variant="light" onClick={this.props.toggle}>
          <FontAwesomeIcon icon={faAlignJustify} />
        </Button>
        <h4 className="navbar__title">Fingerprint System Reparation Tools</h4>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav className="ml-auto" navbar>
            <Navbar.Text className="text-light">
              <a>Mark Otto</a>
            </Navbar.Text>
            <FontAwesomeIcon icon={faCircleUser} className="icon__userlogin" />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavBar;

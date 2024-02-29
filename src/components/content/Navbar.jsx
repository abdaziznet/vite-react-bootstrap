import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignJustify } from "@fortawesome/free-solid-svg-icons";
import { Navbar, Button, Nav } from "react-bootstrap";

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

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto" navbar>
            <Nav.Link href="#">page</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavBar;

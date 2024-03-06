import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faFingerprint,
  faUserCheck,
  faTableList,
  faGear,
  faSignOut,
} from "@fortawesome/free-solid-svg-icons";
import { Nav, Button, Image } from "react-bootstrap";
import classNames from "classnames";
import "./sidebar.css";
import { faMicrosoft } from "@fortawesome/free-brands-svg-icons";

class SideBar extends React.Component {
  render() {
    return (
      <div className={classNames("sidebar", { "is-open": this.props.isOpen })}>
        <div className="sidebar-header">
          <Button
            variant="link"
            //onClick={this.props.toggle}
            style={{ color: "#fff" }}
            className="mt-4"
          >
            <Nav.Link className="text-black" href="/">
              <FontAwesomeIcon icon={faTimes} pull="right" size="xs" />
            </Nav.Link>
          </Button>
          <div className="logo__container">
            <Image
              src="/img/Logo-BCA-bg-white.png"
              fluid
              className="logo__img"
            />
          </div>
        </div>

        <Nav className="flex-column pt-2">
          <Nav.Item className="active">
            <Nav.Link className="text-light" href="/">
              <FontAwesomeIcon icon={faMicrosoft} className="custom-icon" />
              Dashboard
            </Nav.Link>
          </Nav.Item>
          {/* 
          <SubMenu
            title="Pages"
            icon={faCopy}
            items={["Link", "Link2", "Active"]}
          /> */}

          <Nav.Item>
            <Nav.Link className="text-light" href="/ReconstructImage">
              <FontAwesomeIcon icon={faFingerprint} className="custom-icon" />
              Reconstruct Images
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link className="text-light" href="/VerificationImage">
              <FontAwesomeIcon icon={faUserCheck} className="custom-icon" />
              Verification Images
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link className="text-light" s href="/ActivityUser">
              <FontAwesomeIcon icon={faTableList} className="custom-icon" />
              Activity User
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link className="text-light" s href="/Configuration">
              <FontAwesomeIcon icon={faGear} className="custom-icon" />
              Configuration
            </Nav.Link>
          </Nav.Item>

          <Button variant="danger" size="lg" className="btn__logout">
            <FontAwesomeIcon icon={faSignOut} pull="left" size="xl" />
            Logout & Exit
          </Button>
        </Nav>
      </div>
    );
  }
}

export default SideBar;

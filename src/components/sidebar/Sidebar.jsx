import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faFingerprint,
  faUserCheck,
  faTableList,
  faGear,
  faSignOut,
  faL,
} from "@fortawesome/free-solid-svg-icons";
import { Nav, Button, Image, Modal } from "react-bootstrap";
import classNames from "classnames";
import "./sidebar.css";
import { faMicrosoft } from "@fortawesome/free-brands-svg-icons";
import IMAGES from "../content/Assets";

class SideBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalShow: false,
      isbtnLogoutDisable: false,
    };
  }

  render() {
    const { isModalShow } = this.state;
    const { isbtnLogoutDisable } = this.state;

    const handleLogout = () => {
      this.setState({ isModalShow: true });
      this.setState({ isbtnLogoutDisable: true });
    };

    const handleOK = () => {
      this.setState({ isModalShow: false });
      this.setState({ isbtnLogoutDisable: false });

      this.props.onLogout();
    };

    const handleCancel = () => {
      this.setState({ isModalShow: false });
      this.setState({ isbtnLogoutDisable: false });
    };
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
            <Image src={IMAGES.Img_BCALogo} fluid className="logo__img" />
          </div>
        </div>

        <Nav className="flex-column pt-2">
          <Nav.Item className="active">
            <Nav.Link className="text-light" href="/dashboard">
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

          <Button
            variant="danger"
            size="lg"
            className="btn__logout"
            onClick={handleLogout}
            disabled={isbtnLogoutDisable}
          >
            <FontAwesomeIcon icon={faSignOut} pull="left" size="xl" />
            Logout
          </Button>

          <Modal show={isModalShow} onHide={handleCancel}>
            <Modal.Header closeButton>
              <Modal.Title>Confirmation</Modal.Title>
            </Modal.Header>
            <Modal.Body>Are you sure you want to logout?</Modal.Body>
            <Modal.Footer>
              <Button variant="danger" onClick={handleCancel}>
                Cancel
              </Button>
              <Button variant="primary" onClick={handleOK}>
                OK
              </Button>
            </Modal.Footer>
          </Modal>
        </Nav>
      </div>
    );
  }
}

export default SideBar;

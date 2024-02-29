import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBriefcase,
  faPaperPlane,
  faQuestion,
  faImage,
  faCopy,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import SubMenu from "./Submenu";
import { Nav, Button } from "react-bootstrap";
import classNames from "classnames";
import "./sidebar.css";

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
            <FontAwesomeIcon icon={faTimes} pull="right" size="xs" />
          </Button>
          <h3>vite + react + bootstrap</h3>
        </div>

        <Nav className="flex-column pt-2">
          <p className="text-light">Heading</p>

          <Nav.Item className="active">
            <Nav.Link className="text-light" href="/">
              <FontAwesomeIcon icon={faHome} className="custom-icon" />
              Home
            </Nav.Link>
          </Nav.Item>
          {/* 
          <SubMenu
            title="Pages"
            icon={faCopy}
            items={["Link", "Link2", "Active"]}
          /> */}

          <Nav.Item>
            <Nav.Link className="text-light" href="/about">
              <FontAwesomeIcon icon={faBriefcase} className="custom-icon" />
              About
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link className="text-light" href="/">
              <FontAwesomeIcon icon={faImage} className="custom-icon" />
              Portfolio
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link className="text-light" s href="/">
              <FontAwesomeIcon icon={faPaperPlane} className="custom-icon" />
              Contact
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    );
  }
}

export default SideBar;

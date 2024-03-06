import React from "react";
import classNames from "classnames";
import { Container } from "react-bootstrap";
import NavBar from "../../components/content/Navbar";
import "../../App.css";
import InquiryActivityUser from "../../components/forms/InquiryActivityUser";
import { EnumOfActivity } from "../../data";

class ActivityUser extends React.Component {
  render() {
    return (
      <Container
        fluid
        className={classNames("content", { "is-open": this.props.isOpen })}
      >
        <NavBar toggle={this.props.toggle} />
        <InquiryActivityUser title={"List of Activity User"} />
      </Container>
    );
  }
}

export default ActivityUser;

import React from "react";
import classNames from "classnames";
import { Container } from "react-bootstrap";
import NavBar from "../../components/content/Navbar";
import "../../App.css";
import InquiryFilterCriteria from "../../components/forms/InquiryFilterCriteria";
import { EnumOfUserGroupBCA } from "../../data";

class ReconstructImage extends React.Component {
  render() {
    return (
      <Container
        fluid
        className={classNames("content", { "is-open": this.props.isOpen })}
      >
        <NavBar toggle={this.props.toggle} />
        <InquiryFilterCriteria
          title={"List of User Reconstruct Images"}
          data={EnumOfUserGroupBCA}
        />
      </Container>
    );
  }
}

export default ReconstructImage;

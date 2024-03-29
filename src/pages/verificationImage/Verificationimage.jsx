import React from "react";
import classNames from "classnames";
import { Container } from "react-bootstrap";
import NavBar from "../../components/content/Navbar";
import "../../App.css";
import { EnumOfUserGroupBCA, ListOfUserReconstructImage } from "../../data";
import InquiryVerificationImages from "../../components/forms/InquiryVerificationImages";

class VerificationImage extends React.Component {
  render() {
    return (
      <Container
        fluid
        className={classNames("content", { "is-open": this.props.isOpen })}
      >
        <NavBar toggle={this.props.toggle} />
        <InquiryVerificationImages
          title={"List of User Verification Images"}
          dropDownData={EnumOfUserGroupBCA}
        />
      </Container>
    );
  }
}

export default VerificationImage;

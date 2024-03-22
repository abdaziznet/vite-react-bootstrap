import React from "react";
import classNames from "classnames";
import { Container } from "react-bootstrap";
import NavBar from "../../components/content/Navbar";
import "../../App.css";
import { EnumOfUserGroupBCA, ListOfUserReconstructImage } from "../../data";
import InquiryReconstructImages from "../../components/forms/InquiryReconstructImages";

class ReconstructImage extends React.Component {
  render() {
    return (
      <Container
        fluid
        className={classNames("content", { "is-open": this.props.isOpen })}
      >
        <NavBar toggle={this.props.toggle} />
        <InquiryReconstructImages
          title={"List of User Reconstruct Images"}
          dropDownData={EnumOfUserGroupBCA}
          listData={ListOfUserReconstructImage}
        />
      </Container>
    );
  }
}

export default ReconstructImage;

import React from "react";
import classNames from "classnames";
import { Container } from "react-bootstrap";
import NavBar from "../../components/content/Navbar";
import "../../App.css";
import FormExample from "../../components/validation/FormExample";

class ReconstructImage extends React.Component {
  render() {
    return (
      <Container
        fluid
        className={classNames("content", { "is-open": this.props.isOpen })}
      >
        <NavBar toggle={this.props.toggle} />
        <FormExample />
      </Container>
    );
  }
}

export default ReconstructImage;

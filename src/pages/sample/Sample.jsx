import React from "react";
import classNames from "classnames";
import { Container } from "react-bootstrap";
import NavBar from "../../components/content/Navbar";
import "../../App.css";
import SampleComponent from "../../components/forms/Sample";

class Sample extends React.Component {
  render() {
    return (
      <Container
        fluid
        className={classNames("content", { "is-open": this.props.isOpen })}
      >
        <NavBar toggle={this.props.toggle} />
        <SampleComponent />
      </Container>
    );
  }
}

export default Sample;

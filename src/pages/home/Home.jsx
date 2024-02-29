import React from "react";
import classNames from "classnames";
import { Container } from "react-bootstrap";
import NavBar from "../../components/content/Navbar";
import CardItem from "../../components/content/Card";
import "../../App.css";

class Home extends React.Component {
  render() {
    return (
      <Container
        fluid
        className={classNames("content", { "is-open": this.props.isOpen })}
      >
        <NavBar toggle={this.props.toggle} />
        <CardItem />
      </Container>
    );
  }
}

export default Home;

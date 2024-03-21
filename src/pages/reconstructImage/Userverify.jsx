import React from "react";
import classNames from "classnames";
import { Container } from "react-bootstrap";
import NavBar from "../../components/content/Navbar";
import "../../App.css";
import ReconstructImageUserVerify from "../../components/forms/ReconstructImageUserVerify";
import WithRouter from "../../components/content/WithRouter";
import { ListOfFinger } from "../../data";
class UserVerify extends React.Component {
  render() {
    return (
      <Container
        fluid
        className={classNames("content", { "is-open": this.props.isOpen })}
      >
        <NavBar toggle={this.props.toggle} />
        <ReconstructImageUserVerify
          title={"Reconstruct Image User"}
          id={this.props.params.id}
          dataList={ListOfFinger}
        />
      </Container>
    );
  }
}

export default WithRouter(UserVerify);

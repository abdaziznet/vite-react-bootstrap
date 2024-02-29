import React from "react";
import classNames from "classnames";
import { Container } from "react-bootstrap";
import NavBar from "../../components/content/Navbar";
import CardItem from "../../components/content/Card";
import "../../App.css";
import Img2 from "../../../public/img/finger 2.jpg";
import Img3 from "../../../public/img/finger 3.jpg";
import Img4 from "../../../public/img/finger 4.jpg";
import Img5 from "../../../public/img/finger 5.jpg";

import "./home.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

class Home extends React.Component {
  render() {
    return (
      <Container
        fluid
        className={classNames("content", { "is-open": this.props.isOpen })}
      >
        <NavBar toggle={this.props.toggle} />
        {/* <Row xs={1} md={5} className="g-4">
          {Array.from({ length: 5 }).map((_, idx) => (
            <Col key={idx}></Col>
          ))}
        </Row> */}
        <div className="card__wrapper">
          <CardItem img={Img2} />
          <CardItem img={Img3} />
          <CardItem img={Img4} />
          <CardItem img={Img5} />
        </div>
      </Container>
    );
  }
}

export default Home;

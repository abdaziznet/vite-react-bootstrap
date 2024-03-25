import React from "react";
import classNames from "classnames";
import { Col, Container, Row, Table } from "react-bootstrap";
import NavBar from "../../components/content/Navbar";
import CardItem from "../../components/content/Card";
import "../../App.css";
import Img2 from "/img/finger 2.jpg";
import Img3 from "/img/finger 3.jpg";
import Img4 from "/img/finger 4.jpg";
import "./dashboard.css";
import CountCard from "../../components/content/CountCard";
import ListView from "../../components/content/ListView";
import CardInfo from "../../components/content/CardInfo";
import { ListViewPercentage } from "../../data";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      isLoading: true,
      error: null,
    };
  }

  componentDidMount() {
    fetch("/src/dummy/dashboard.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        this.setState({
          data: data,
          isLoading: false,
        });
      })
      .catch((error) => {
        this.setState({
          error: error,
          isLoading: false,
        });
      });
  }
  render() {
    const { data, isLoading, error } = this.state;

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error: {error.message}</div>;
    }

    return (
      <Container
        fluid
        className={classNames("content", { "is-open": this.props.isOpen })}
      >
        <NavBar toggle={this.props.toggle} loginName={data.loginInfo["name"]} />

        <Container fluid className="container__dashboard">
          <Row>
            {/* First Column */}
            <Col md={3}>
              <CountCard title={"Branch Total"} value={data.branchTotal} />
              <Row>
                {/* First Nested Column */}
                <Col md={3}>
                  <CardItem
                    img={Img2}
                    title={"Reconstruct Images"}
                    desc={
                      "Some quick example text to build on the card title and make up the bulk of the card's content."
                    }
                    linkTo={"/ReconstructImage"}
                  />
                </Col>
              </Row>
            </Col>

            {/* Second Column */}
            <Col md={3}>
              <CountCard
                title={"Reconstruct Images"}
                value={data.reconstructImagesTotal}
              />
              <Row>
                {/* First Nested Column */}
                <Col md={3}>
                  <CardItem
                    img={Img3}
                    title={"Verification Images"}
                    desc={
                      "Some quick example text to build on the card title and make up the bulk of the card's content."
                    }
                    linkTo={"/VerificationImage"}
                  />
                </Col>
              </Row>
            </Col>

            {/* Third Column */}
            <Col md={3}>
              <CountCard title={"User Total"} value={data.userTotal} />
              <Row>
                {/* First Nested Column */}
                <Col md={3}>
                  <CardItem
                    img={Img4}
                    title={"Configuration"}
                    desc={
                      "Some quick example text to build on the card title and make up the bulk of the card's content."
                    }
                    linkTo={"/Configuration"}
                  />
                </Col>
              </Row>
            </Col>

            {/* four Column */}
            <Col md={3}>
              <ListView data={data.branchPercentage} />
            </Col>
          </Row>
          <Row>
            <Col md={9}>
              <CardInfo title={"Login Information"} data={data.loginInfo} />
            </Col>
          </Row>
        </Container>
      </Container>
    );
  }
}

export default Dashboard;

import React from "react";
import classNames from "classnames";
import { Col, Container, Row, Table } from "react-bootstrap";
import NavBar from "../../components/content/Navbar";
import CardItem from "../../components/content/Card";
import "../../App.css";
import "./dashboard.css";
import CountCard from "../../components/content/CountCard";
import ListView from "../../components/content/ListView";
import CardInfo from "../../components/content/CardInfo";
import IMAGES from "../../components/content/Assets";

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
    fetch("/src/dummy/getdashboard.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        if (data.StatusCode != 0) {
          throw new Error(data.StatusMessage);
        }

        const responseData = JSON.parse(data.ResponseData);
        this.setState({
          data: responseData,
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
        <NavBar toggle={this.props.toggle} loginName={data.LoginInfo.Name} />

        <Container fluid className="container__dashboard">
          <Row>
            {/* First Column */}
            <Col md={3}>
              <CountCard title={"Branch Total"} value={data.BranchTotal} />
              <Row>
                {/* First Nested Column */}
                <Col md={3}>
                  <CardItem
                    img={IMAGES.Img_ReconstructImages}
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
                value={data.ReconstructImages}
              />
              <Row>
                {/* First Nested Column */}
                <Col md={3}>
                  <CardItem
                    img={IMAGES.Img_VerificationImages}
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
              <CountCard title={"User Total"} value={data.UserTotal} />
              <Row>
                {/* First Nested Column */}
                <Col md={3}>
                  <CardItem
                    img={IMAGES.Img_Configuration}
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
              <ListView data={data.PendingListInfo} />
            </Col>
          </Row>
          <Row>
            <Col md={9}>
              <CardInfo title={"Login Information"} data={data.LoginInfo} />
            </Col>
          </Row>
        </Container>
      </Container>
    );
  }
}

export default Dashboard;

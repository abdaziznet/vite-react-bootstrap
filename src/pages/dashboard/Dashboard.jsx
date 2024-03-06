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
import { CardMenu, CardSummary, ListViewPercentage } from "../../data";

class Dashboard extends React.Component {
  render() {
    return (
      <Container
        fluid
        className={classNames("content", { "is-open": this.props.isOpen })}
      >
        <NavBar toggle={this.props.toggle} />

        <Container fluid className="container__dashboard">
          <Row>
            {/* First Column */}
            <Col md={3}>
              <CountCard title={"Branch Total"} value={"40"} />
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
              <CountCard title={"Reconstruct Images"} value={"20"} />
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
              <CountCard title={"User Total"} value={"100"} />
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
              <ListView data={ListViewPercentage} />
            </Col>
          </Row>
          <Row>
            <Col md={9}>
              <CardInfo title={"Login Information"} />
            </Col>
          </Row>
        </Container>

        {/* <Container className="container__dashboard" fluid> */}
        {/* <div className="content__dashboard grid">
            {CardSummary.map((item) => {
              return <CountCard key={item.id} {...item} />;
            })}
          </div>
          <div className="content__dashboard grid">
            {CardMenu.map((item) => {
              return <CardItem key={item.id} {...item} />;
            })}
          </div> */}

        {/* <Table responsive>
            <tr>
              <td className="align-top">
                <CountCard title={"Branch Total"} value={"40"} />
              </td>
              <td className="align-top">
                <CountCard title={"Reconstruct Images"} value={"20"} />
              </td>
              <td className="align-top">
                <CountCard title={"User Total"} value={"100"} />
              </td>
              <td rowSpan={2} className="align-top">
                <ListView />
              </td>
            </tr>
            <tr>
              <td className="align-top">
                <CardItem
                  img={Img2}
                  title={"Reconstruct Images"}
                  desc={
                    "Some quick example text to build on the card title and make up the bulk of the card's content."
                  }
                  linkTo={"/ReconstructImage"}
                />
              </td>
              <td className="align-top">
                <CardItem
                  img={Img3}
                  title={"Verification Images"}
                  desc={
                    "Some quick example text to build on the card title and make up the bulk of the card's content."
                  }
                  linkTo={"/VerificationImage"}
                />
              </td>
              <td className="align-top">
                <CardItem
                  img={Img4}
                  title={"Configuration"}
                  desc={
                    "Some quick example text to build on the card title and make up the bulk of the card's content."
                  }
                  linkTo={"/Configuration"}
                />
              </td>
            </tr>
            <tr>
              <td className="align-top" colSpan={3}>
                <CardInfo title={"Login Information"} />
              </td>
            </tr>
            <tr>
              <td className="align-top" colSpan={3}></td>
            </tr>
          </Table> */}
        {/* </Container> */}
      </Container>
    );
  }
}

export default Dashboard;

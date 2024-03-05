import React from "react";
import classNames from "classnames";
import { Container, Table } from "react-bootstrap";
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

class Dashboard extends React.Component {
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
        <Container className="content__isi" fluid>
          <Table responsive>
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
          </Table>
        </Container>
      </Container>
    );
  }
}

export default Dashboard;

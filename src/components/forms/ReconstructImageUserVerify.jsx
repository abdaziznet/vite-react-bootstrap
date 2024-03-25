import React, { useEffect, useState } from "react";
import {
  Badge,
  Button,
  Card,
  Col,
  Container,
  Form,
  Row,
  Spinner,
  Table,
} from "react-bootstrap";
import "./reconstructimageuserverify.css";
import SpinnerWithLabel from "../content/SpinnerWithLabel";

function ReconstructImageUserVerify({ title, id, dataList }) {
  const [item, setItem] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/src/dummy/user.json")
      //fetch(`https://dummyjson.com/products`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setItem(data[id - 1]);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!item) {
    return <div>Loading...</div>;
  }

  const msgInfo = document.getElementById("msgInfo");

  function handleVerification() {
    setTimeout(() => {
      var spinnerInfo = document.getElementById("spinnerInfo");
      if (spinnerInfo) {
        // Set custom styles using the style property
        spinnerInfo.style.display = "block";
      } else {
        console.error("list element not found.");
      }

      msgInfo.textContent = "Please place your finger...";
    }, 10);
  }

  return (
    <Card>
      <Card.Header as="h6">{title}</Card.Header>
      <Card.Body>
        <Container fluid>
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} md="4" controlId="userId">
                <Form.Label column sm="6" className="frm__label">
                  NIP / NIK / Vendor NIP
                  {/* <Badge bg="primary" >NIP / NIK / Vendor NIP</Badge> */}
                </Form.Label>
                <Form.Label>: {item.userId}</Form.Label>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="branchCode">
                <Form.Label column sm="6" className="frm__label">
                  Name
                  {/* <Badge bg="primary">Name</Badge> */}
                </Form.Label>
                <Form.Label>: {item.name}</Form.Label>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="branchCode">
                <Form.Label column sm="6" className="frm__label">
                  User Group
                  {/* <Badge bg="primary">User Group</Badge> */}
                </Form.Label>
                <Form.Label>: {item.userGroup}</Form.Label>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="4" controlId="userId">
                <Form.Label column sm="6" className="frm__label">
                  Branch Code
                  {/* <Badge bg="primary">Branch Code</Badge> */}
                </Form.Label>
                <Form.Label>: {item.branchCode}</Form.Label>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="branchCode">
                <Form.Label column sm="6" className="frm__label">
                  Office Code
                  {/* <Badge bg="primary">Office Code</Badge> */}
                </Form.Label>
                <Form.Label>: {item.officeCode}</Form.Label>
              </Form.Group>
            </Row>
            <hr />
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-auto">
                  <h5>
                    You have <Badge bg="secondary">3</Badge> Finger template,
                    Please verification your finger template here.
                  </h5>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-auto">
                  <Row className="mb-3">
                    <Col>
                      <Form.Check
                        type="checkbox"
                        id="chk0"
                        className="chk__0"
                      />
                    </Col>
                    <Col>
                      <Form.Check
                        type="checkbox"
                        id="chk1"
                        className="chk__1"
                      />
                    </Col>
                    <Col>
                      <Form.Check
                        type="checkbox"
                        id="chk2"
                        className="chk__2"
                      />
                    </Col>
                    <Col>
                      <Form.Check
                        type="checkbox"
                        id="chk3"
                        className="chk__3"
                      />
                    </Col>
                    <Col>
                      <Form.Check
                        type="checkbox"
                        id="chk4"
                        className="chk__4"
                      />
                    </Col>
                    <Col>
                      <Form.Check
                        type="checkbox"
                        id="chk5"
                        className="chk__5"
                      />
                    </Col>
                    <Col>
                      <Form.Check
                        type="checkbox"
                        id="chk6"
                        className="chk__6"
                      />
                    </Col>
                    <Col>
                      <Form.Check
                        type="checkbox"
                        id="chk7"
                        className="chk__7"
                      />
                    </Col>
                    <Col>
                      <Form.Check
                        type="checkbox"
                        id="chk8"
                        className="chk__8"
                      />
                    </Col>
                    <Col>
                      <Form.Check
                        type="checkbox"
                        id="chk9"
                        className="chk__9"
                      />
                    </Col>
                  </Row>
                  <img
                    src="/public/img/finger.png"
                    alt="finger"
                    className="img-fluid img__finger"
                  />
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-auto">
                  <Button variant="primary" onClick={handleVerification}>
                    Verification User
                  </Button>
                </div>
                <Row className="justify-content-md-center msg__info">
                  <Col md="auto">
                    <SpinnerWithLabel label={""} />
                  </Col>
                </Row>
              </div>
            </div>
            <div className="list__finger">
              <Table responsive striped bordered hover>
                <thead>
                  <tr>
                    <th>Finger Index</th>
                    <th>Finger Description</th>
                    <th>Verification Result</th>
                    <th>Score</th>
                  </tr>
                </thead>
                <tbody>
                  {dataList.map((item, index) => (
                    <tr key={index}>
                      {Object.values(item).map((value, subIndex) => (
                        <td key={subIndex}>{value}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </Form>
        </Container>
      </Card.Body>
    </Card>
  );
}

export default ReconstructImageUserVerify;

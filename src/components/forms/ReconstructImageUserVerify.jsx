import React, { useEffect, useState } from "react";
import {
  Badge,
  Button,
  Card,
  Col,
  Container,
  Form,
  Row,
  Table,
} from "react-bootstrap";
import "./reconstructimageuserverify.css";
import SpinnerWithLabel from "../content/SpinnerWithLabel";
import IMAGES from "../content/Assets";

function ReconstructImageUserVerify({ title, id, dataList }) {
  const [item, setItem] = useState(null);
  const [error, setError] = useState(null);
  const [fingerFirst, setFingerFirst] = useState(null);
  const [fingerSecond, setFingerSecond] = useState(null);
  const [fingerThird, setFingerThird] = useState(null);

  const [fingerFirstStatus, setFingerFirstStatus] = useState(null);
  const [fingerSecondStatus, setFingerSecondStatus] = useState(null);
  const [fingerThirdStatus, setFingerThirdStatus] = useState(null);

  useEffect(() => {
    fetch("/src/dummy/reconstruct-user-details.json")
      //fetch(`https://dummyjson.com/products`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setItem(data[id - 1]);
        setFingerFirst(data[id - 1].fingerDetails[0].fingerIndex);
        setFingerSecond(data[id - 1].fingerDetails[1].fingerIndex);
        setFingerThird(data[id - 1].fingerDetails[2].fingerIndex);

        setFingerFirstStatus(data[id - 1].fingerDetails[0].result);
        setFingerSecondStatus(data[id - 1].fingerDetails[1].result);
        setFingerThirdStatus(data[id - 1].fingerDetails[2].result);
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
                      {fingerFirst === 0 ||
                      fingerSecond === 0 ||
                      fingerThird === 0 ? (
                        <Form.Check
                          type="checkbox"
                          id="chk0"
                          className="chk__0"
                          defaultChecked={
                            fingerFirstStatus === "Matched" ||
                            fingerSecondStatus === "Matched" ||
                            fingerThirdStatus === "Matched"
                              ? true
                              : false
                          }
                          disabled={
                            fingerFirstStatus === "Matched" ||
                            fingerSecondStatus === "Matched" ||
                            fingerThirdStatus === "Matched"
                              ? true
                              : false
                          }
                        />
                      ) : (
                        <Form.Check
                          type="checkbox"
                          id="chk0"
                          className="chk__0 disabled__checkbox"
                          disabled
                        />
                      )}
                    </Col>
                    <Col>
                      {fingerFirst === 1 ||
                      fingerSecond === 1 ||
                      fingerThird === 1 ? (
                        <Form.Check
                          type="checkbox"
                          id="chk1"
                          className="chk__1"
                          defaultChecked={
                            (fingerFirst === 1 &&
                              fingerFirstStatus === "Matched") ||
                            (fingerSecond === 1 &&
                              fingerSecondStatus === "Matched") ||
                            (fingerThird === 1 &&
                              fingerThirdStatus === "Matched")
                              ? true
                              : false
                          }
                          disabled={
                            (fingerFirst === 1 &&
                              fingerFirstStatus === "Matched") ||
                            (fingerSecond === 1 &&
                              fingerSecondStatus === "Matched") ||
                            (fingerThird === 1 &&
                              fingerThirdStatus === "Matched")
                              ? true
                              : false
                          }
                        />
                      ) : (
                        <Form.Check
                          type="checkbox"
                          id="chk1"
                          className="chk__1 disabled__checkbox"
                          disabled
                        />
                      )}
                    </Col>
                    <Col>
                      {fingerFirst === 2 ||
                      fingerSecond === 2 ||
                      fingerThird === 2 ? (
                        <Form.Check
                          type="checkbox"
                          id="chk2"
                          className="chk__2"
                          defaultChecked={
                            (fingerFirst === 2 &&
                              fingerFirstStatus === "Matched") ||
                            (fingerSecond === 2 &&
                              fingerSecondStatus === "Matched") ||
                            (fingerThird === 2 &&
                              fingerThirdStatus === "Matched")
                              ? true
                              : false
                          }
                          disabled={
                            (fingerFirst === 2 &&
                              fingerFirstStatus === "Matched") ||
                            (fingerSecond === 2 &&
                              fingerSecondStatus === "Matched") ||
                            (fingerThird === 2 &&
                              fingerThirdStatus === "Matched")
                              ? true
                              : false
                          }
                        />
                      ) : (
                        <Form.Check
                          type="checkbox"
                          id="chk2"
                          className="chk__2 disabled__checkbox"
                          disabled
                        />
                      )}
                    </Col>
                    <Col>
                      {fingerFirst === 3 ||
                      fingerSecond === 3 ||
                      fingerThird === 3 ? (
                        <Form.Check
                          type="checkbox"
                          id="chk3"
                          className="chk__3"
                          defaultChecked={
                            (fingerFirst === 3 &&
                              fingerFirstStatus === "Matched") ||
                            (fingerSecond === 3 &&
                              fingerSecondStatus === "Matched") ||
                            (fingerThird === 3 &&
                              fingerThirdStatus === "Matched")
                              ? true
                              : false
                          }
                          disabled={
                            (fingerFirst === 3 &&
                              fingerFirstStatus === "Matched") ||
                            (fingerSecond === 3 &&
                              fingerSecondStatus === "Matched") ||
                            (fingerThird === 3 &&
                              fingerThirdStatus === "Matched")
                              ? true
                              : false
                          }
                        />
                      ) : (
                        <Form.Check
                          type="checkbox"
                          id="chk3"
                          className="chk__3 disabled__checkbox"
                          disabled
                        />
                      )}
                    </Col>
                    <Col>
                      {fingerFirst === 4 ||
                      fingerSecond === 4 ||
                      fingerThird === 4 ? (
                        <Form.Check
                          type="checkbox"
                          id="chk4"
                          className="chk__4"
                          defaultChecked={
                            (fingerFirst === 4 &&
                              fingerFirstStatus === "Matched") ||
                            (fingerSecond === 4 &&
                              fingerSecondStatus === "Matched") ||
                            (fingerThird === 4 &&
                              fingerThirdStatus === "Matched")
                              ? true
                              : false
                          }
                          disabled={
                            (fingerFirst === 4 &&
                              fingerFirstStatus === "Matched") ||
                            (fingerSecond === 4 &&
                              fingerSecondStatus === "Matched") ||
                            (fingerThird === 4 &&
                              fingerThirdStatus === "Matched")
                              ? true
                              : false
                          }
                        />
                      ) : (
                        <Form.Check
                          type="checkbox"
                          id="chk4"
                          className="chk__4 disabled__checkbox"
                          disabled
                        />
                      )}
                    </Col>
                    <Col>
                      {fingerFirst === 5 ||
                      fingerSecond === 5 ||
                      fingerThird === 5 ? (
                        <Form.Check
                          type="checkbox"
                          id="chk5"
                          className="chk__5"
                          defaultChecked={
                            (fingerFirst === 5 &&
                              fingerFirstStatus === "Matched") ||
                            (fingerSecond === 5 &&
                              fingerSecondStatus === "Matched") ||
                            (fingerThird === 5 &&
                              fingerThirdStatus === "Matched")
                              ? true
                              : false
                          }
                          disabled={
                            (fingerFirst === 5 &&
                              fingerFirstStatus === "Matched") ||
                            (fingerSecond === 5 &&
                              fingerSecondStatus === "Matched") ||
                            (fingerThird === 5 &&
                              fingerThirdStatus === "Matched")
                              ? true
                              : false
                          }
                        />
                      ) : (
                        <Form.Check
                          type="checkbox"
                          id="chk5"
                          className="chk__5 disabled__checkbox"
                          disabled
                        />
                      )}
                    </Col>
                    <Col>
                      {fingerFirst === 6 ||
                      fingerSecond === 6 ||
                      fingerThird === 6 ? (
                        <Form.Check
                          type="checkbox"
                          id="chk6"
                          className="chk__6"
                          defaultChecked={
                            (fingerFirst === 6 &&
                              fingerFirstStatus === "Matched") ||
                            (fingerSecond === 6 &&
                              fingerSecondStatus === "Matched") ||
                            (fingerThird === 6 &&
                              fingerThirdStatus === "Matched")
                              ? true
                              : false
                          }
                          disabled={
                            (fingerFirst === 6 &&
                              fingerFirstStatus === "Matched") ||
                            (fingerSecond === 6 &&
                              fingerSecondStatus === "Matched") ||
                            (fingerThird === 6 &&
                              fingerThirdStatus === "Matched")
                              ? true
                              : false
                          }
                        />
                      ) : (
                        <Form.Check
                          type="checkbox"
                          id="chk6"
                          className="chk__6 disabled__checkbox"
                          disabled
                        />
                      )}
                    </Col>
                    <Col>
                      {fingerFirst === 7 ||
                      fingerSecond === 7 ||
                      fingerThird === 7 ? (
                        <Form.Check
                          type="checkbox"
                          id="chk7"
                          className="chk__7"
                          defaultChecked={
                            (fingerFirst === 7 &&
                              fingerFirstStatus === "Matched") ||
                            (fingerSecond === 7 &&
                              fingerSecondStatus === "Matched") ||
                            (fingerThird === 7 &&
                              fingerThirdStatus === "Matched")
                              ? true
                              : false
                          }
                          disabled={
                            (fingerFirst === 7 &&
                              fingerFirstStatus === "Matched") ||
                            (fingerSecond === 7 &&
                              fingerSecondStatus === "Matched") ||
                            (fingerThird === 7 &&
                              fingerThirdStatus === "Matched")
                              ? true
                              : false
                          }
                        />
                      ) : (
                        <Form.Check
                          type="checkbox"
                          id="chk7"
                          className="chk__7 disabled__checkbox"
                          disabled
                        />
                      )}
                    </Col>
                    <Col>
                      {fingerFirst === 8 ||
                      fingerSecond === 8 ||
                      fingerThird === 8 ? (
                        <Form.Check
                          type="checkbox"
                          id="chk8"
                          className="chk__8"
                          defaultChecked={
                            (fingerFirst === 8 &&
                              fingerFirstStatus === "Matched") ||
                            (fingerSecond === 8 &&
                              fingerSecondStatus === "Matched") ||
                            (fingerThird === 8 &&
                              fingerThirdStatus === "Matched")
                              ? true
                              : false
                          }
                          disabled={
                            (fingerFirst === 8 &&
                              fingerFirstStatus === "Matched") ||
                            (fingerSecond === 8 &&
                              fingerSecondStatus === "Matched") ||
                            (fingerThird === 8 &&
                              fingerThirdStatus === "Matched")
                              ? true
                              : false
                          }
                        />
                      ) : (
                        <Form.Check
                          type="checkbox"
                          id="chk8"
                          className="chk__8 disabled__checkbox"
                          disabled
                        />
                      )}
                    </Col>
                    <Col>
                      {fingerFirst === 9 ||
                      fingerSecond === 9 ||
                      fingerThird === 9 ? (
                        <Form.Check
                          type="checkbox"
                          id="chk9"
                          className="chk__9"
                          defaultChecked={
                            (fingerFirst === 9 &&
                              fingerFirstStatus === "Matched") ||
                            (fingerSecond === 9 &&
                              fingerSecondStatus === "Matched") ||
                            (fingerThird === 9 &&
                              fingerThirdStatus === "Matched")
                              ? true
                              : false
                          }
                          disabled={
                            (fingerFirst === 9 &&
                              fingerFirstStatus === "Matched") ||
                            (fingerSecond === 9 &&
                              fingerSecondStatus === "Matched") ||
                            (fingerThird === 9 &&
                              fingerThirdStatus === "Matched")
                              ? true
                              : false
                          }
                        />
                      ) : (
                        <Form.Check
                          type="checkbox"
                          id="chk9"
                          className="chk__9 disabled__checkbox"
                          disabled
                        />
                      )}
                    </Col>
                  </Row>
                  <img
                    src={IMAGES.Img_Finger}
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
                  {item.fingerDetails.map((item) => (
                    <tr key={item.idx}>
                      <td>{item.fingerIndex}</td>
                      <td>{item.description}</td>
                      <td>{item.result}</td>
                      <td>{item.score}</td>
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

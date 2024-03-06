import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import {
  Card,
  Container,
  Form,
  Button,
  Col,
  InputGroup,
  Row,
} from "react-bootstrap";
import { EnumOfActivity, EnumOfOrderBy, EnumOfSortBy } from "../../data";

function InquiryActivityUser({ title }) {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <>
      <Card>
        <Card.Header as="h6">{title}</Card.Header>
        <Card.Body>
          <Container fluid>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Row className="mb-3">
                <Form.Group as={Col} md="8" controlId="validationCustom01">
                  <Form.Label>Branch Code</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Branch Code"
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid branch code.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="2" controlId="validationCustom02">
                  <Form.Label>Start Period</Form.Label>
                  <Form.Control required type="date" />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid start period.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="2" controlId="validationCustom03">
                  <Form.Label>End Period</Form.Label>
                  <Form.Control required type="date" />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid end period.
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} md="4" controlId="validationCustom03">
                  <Form.Label>Office Code</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Office Code"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid office code.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustom04">
                  <Form.Label>Activity</Form.Label>
                  <InputGroup hasValidation>
                    <Form.Control as="select">
                      {EnumOfActivity.map((item) => (
                        <option key={item.id} value={item.id}>
                          {item.label}
                        </option>
                      ))}
                    </Form.Control>
                  </InputGroup>
                </Form.Group>
                <Form.Group as={Col} md="2" controlId="validationCustom05">
                  <Form.Label>Order by</Form.Label>
                  <InputGroup hasValidation>
                    <Form.Control as="select">
                      {EnumOfOrderBy.map((item) => (
                        <option key={item.id} value={item.id}>
                          {item.label}
                        </option>
                      ))}
                    </Form.Control>
                  </InputGroup>
                </Form.Group>
                <Form.Group as={Col} md="2" controlId="validationCustom06">
                  <Form.Label>Sort by</Form.Label>
                  <InputGroup hasValidation>
                    <Form.Control as="select">
                      {EnumOfSortBy.map((item) => (
                        <option key={item.id} value={item.id}>
                          {item.label}
                        </option>
                      ))}
                    </Form.Control>
                  </InputGroup>
                </Form.Group>
              </Row>
              <Button className="float-end" type="submit" variant="primary">
                <FontAwesomeIcon icon={faSearch} className="me-2" />
                Search
              </Button>
            </Form>
          </Container>
        </Card.Body>
      </Card>
      <br />
    </>
  );
}

export default InquiryActivityUser;

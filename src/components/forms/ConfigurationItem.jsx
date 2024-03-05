import { faCancel, faSave } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Card, Container, Form, Button, Col, Row } from "react-bootstrap";

function ConfigurationItem({ title }) {
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
            <Form>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formHorizontal01"
              >
                <Form.Label column sm={2}>
                  Service URL
                </Form.Label>
                <Col sm={10}>
                  <Form.Control type="text" placeholder="Service URL" />
                </Col>
              </Form.Group>

              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formHorizontal02"
              >
                <Form.Label column sm={2}>
                  Page Size
                </Form.Label>
                <Col sm={10}>
                  <Form.Control type="text" placeholder="Page Size " />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Col sm={{ span: 10, offset: 2 }}>
                  <Button type="submit" variant="danger">
                    <FontAwesomeIcon icon={faCancel} className="me-2" />
                    Cancel
                  </Button>
                  <Button type="submit" variant="primary" className="m-2">
                    <FontAwesomeIcon icon={faSave} className="me-2" />
                    Save
                  </Button>
                </Col>
              </Form.Group>
            </Form>
          </Container>
        </Card.Body>
      </Card>
      <br />
    </>
  );
}

export default ConfigurationItem;

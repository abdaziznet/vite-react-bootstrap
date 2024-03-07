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

function InquiryFilterCriteria({ title, data }) {
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
                {/* <Form.Group as={Col} md="4" controlId="validationCustom01">
                  <Form.Label>NIP / NIK / Vendor NIP</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="NIP / NIP / Vendor NIP"
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid nip /nik / vendor nip.
                  </Form.Control.Feedback>
                </Form.Group> */}
                <Form.Group as={Col} md="4" controlId="validationCustom01">
                  <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">
                      NIP / NIP / Vendor NIP
                    </InputGroup.Text>
                    <Form.Control
                      required
                      type="text"
                      placeholder="NIP / NIP / Vendor NIP"
                    />
                    <Form.Control.Feedback type="invalid">
                      nip /nik / vendor nip is required field.
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
                {/* <Form.Group as={Col} md="4" controlId="validationCustom02">
                  <Form.Label>Name</Form.Label>
                  <Form.Control required type="text" placeholder="Name" />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid name.
                  </Form.Control.Feedback>
                </Form.Group> */}
                <Form.Group as={Col} md="4" controlId="validationCustom02">
                  <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon2">Name</InputGroup.Text>
                    <Form.Control required type="text" placeholder="Name" />
                    <Form.Control.Feedback type="invalid">
                      Please provide a valid name.
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
                {/* <Form.Group as={Col} md="4" controlId="validationCustom03">
                  <Form.Label>User Group</Form.Label>
                  <InputGroup hasValidation>
                    <Form.Control as="select">
                      {data.map((item) => (
                        <option key={item.id} value={item.id}>
                          {item.label}
                        </option>
                      ))}
                    </Form.Control>
                  </InputGroup>
                </Form.Group> */}
                <Form.Group as={Col} md="4" controlId="validationCustom03">
                  <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon3">
                      User Group
                    </InputGroup.Text>
                    <Form.Control as="select">
                      {data.map((item) => (
                        <option key={item.id} value={item.id}>
                          {item.label}
                        </option>
                      ))}
                    </Form.Control>
                  </InputGroup>
                </Form.Group>
              </Row>
              <Row className="mb-3">
                {/* <Form.Group as={Col} md="4" controlId="validationCustom03">
                  <Form.Label>Branch Code</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Branch Code"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid branch code.
                  </Form.Control.Feedback>
                </Form.Group> */}
                <Form.Group as={Col} md="4" controlId="validationCustom04">
                  <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon4">
                      Branch Code
                    </InputGroup.Text>
                    <Form.Control
                      type="text"
                      placeholder="Branch Code"
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Please provide a valid branch code.
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
                {/* <Form.Group as={Col} md="3" controlId="validationCustom04">
                  <Form.Label>Office Code</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Office Code"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid office code.
                  </Form.Control.Feedback>
                </Form.Group> */}
                <Form.Group as={Col} md="4" controlId="validationCustom05">
                  <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon5">
                      Office Code
                    </InputGroup.Text>
                    <Form.Control
                      type="text"
                      placeholder="Office Code"
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Please provide a valid office code.
                    </Form.Control.Feedback>
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
    </>
  );
}

export default InquiryFilterCriteria;

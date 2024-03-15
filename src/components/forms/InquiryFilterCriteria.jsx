import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faL, faRotate, faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import {
  Card,
  Container,
  Form,
  Button,
  Col,
  InputGroup,
  Row,
  Table,
} from "react-bootstrap";
import "./inquiryfiltercriteria.css";

function InquiryFilterCriteria({ title, dropDownData, listData }) {
  const [validated, setValidated] = useState(false);
  const initialFormState = {
    userId: "",
    name: "",
    userGroup: 1,
    branchCode: "",
    officeCode: "",
  };

  const [formData, setFormData] = useState(initialFormState);

  const clearForm = () => {
    setFormData(initialFormState);
  };

  const changeData = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setValidated(true);

    if (validated) {
      showList();
    } else {
      hiddenList();
    }
  };

  const handleReset = (e) => {
    e.preventDefault();
    clearForm();
    hiddenList();
  };

  function hiddenList() {
    var list = document.getElementById("listOfUser");
    if (list) {
      // Set custom styles using the style property
      list.style.display = "none";
    } else {
      console.error("list element not found.");
    }
  }

  function showList() {
    var list = document.getElementById("listOfUser");
    if (list) {
      // Set custom styles using the style property
      list.style.display = "block";
    } else {
      console.error("list element not found.");
    }
  }

  return (
    <>
      <Card>
        <Card.Header as="h6">{title}</Card.Header>
        <Card.Body>
          <Container fluid>
            <Form noValidate validated={validated}>
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
                <Form.Group as={Col} md="4" controlId="userId">
                  <InputGroup className="mb-3">
                    <InputGroup.Text>NIP / NIP / Vendor NIP</InputGroup.Text>
                    <Form.Control
                      required
                      type="text"
                      name="userId"
                      placeholder="NIP / NIP / Vendor NIP"
                      value={formData.userId}
                      onChange={changeData}
                      pattern="[0-9]*"
                      maxLength={7}
                      //isInvalid={validated && !/^[0-9]*$/.test(formData.userId)}
                    />
                    <Form.Control.Feedback type="invalid">
                      Nip /nik / vendor nip is required field.
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
                <Form.Group as={Col} md="4" controlId="name">
                  <InputGroup className="mb-3">
                    <InputGroup.Text>Name</InputGroup.Text>
                    <Form.Control
                      required
                      type="text"
                      name="name"
                      placeholder="Name"
                      value={formData.name}
                      onChange={changeData}
                    />
                    <Form.Control.Feedback type="invalid">
                      Name is required field.
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
                <Form.Group as={Col} md="4" controlId="userGroup">
                  <InputGroup className="mb-3">
                    <InputGroup.Text>User Group</InputGroup.Text>
                    <Form.Control
                      as="select"
                      name="userGroup"
                      value={formData.userGroup}
                      onChange={changeData}
                    >
                      {dropDownData.map((item) => (
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
                <Form.Group as={Col} md="4" controlId="branchCode">
                  <InputGroup className="mb-3">
                    <InputGroup.Text>Branch Code</InputGroup.Text>
                    <Form.Control
                      required
                      type="text"
                      name="branchCode"
                      placeholder="Branch Code"
                      value={formData.branchCode}
                      onChange={changeData}
                    />
                    <Form.Control.Feedback type="invalid">
                      Branch code is required field.
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
                      required
                      type="text"
                      name="officeCode"
                      placeholder="Office Code"
                      value={formData.officeCode}
                      onChange={changeData}
                    />
                    <Form.Control.Feedback type="invalid">
                      Office code is required field.
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
              </Row>
              <Button
                className="float-end btn__search"
                type="submit"
                variant="primary"
                onClick={handleSearch}
              >
                <FontAwesomeIcon icon={faSearch} className="me-2" />
                Search
              </Button>
              <Button
                className="float-end"
                type="submit"
                variant="success"
                onClick={handleReset}
              >
                <FontAwesomeIcon icon={faRotate} className="me-2" />
                Reset
              </Button>
            </Form>
            <div id="listOfUser" className="list__of__user">
              <Table responsive striped bordered hover>
                <thead>
                  <th>#</th>
                  <th>NIP / NIK/ Vendor NIP</th>
                  <th>Name</th>
                  <th>User Group</th>
                  <th>Branch Code</th>
                  <th>Office Code</th>
                  <th>Reconstruct Fingerprint Image Status</th>
                </thead>
                <tbody>
                  {listData.map((item, index) => (
                    <tr key={index}>
                      {Object.values(item).map((value, subIndex) => (
                        <td key={subIndex}>{value}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </Container>
        </Card.Body>
      </Card>
    </>
  );
}

export default InquiryFilterCriteria;

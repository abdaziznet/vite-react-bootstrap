import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotate, faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState, React } from "react";
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
import "./inquiryverificationimages.css";

function InquiryVerificationImages({ title, dropDownData }) {
  const [validated, setValidated] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

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
    setLoading(true);

    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
    }
    setValidated(true);

    if (validateForm(formData)) {
      fetch("/src/dummy/user.json")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          setSearchResults(data);
          setLoading(false);
        })
        .catch((error) => {
          setError(error);
          setLoading(false);
        });
      showList();
    } else {
      hiddenList();
    }
  };

  const validateForm = (data) => {
    let result = true;

    if (!data.userId.trim()) {
      result = false;
    }

    return result;
  };

  const handleReset = (e) => {
    e.preventDefault();
    clearForm();
    hiddenList();
  };

  function hiddenList() {
    var list = document.getElementById("listOfUserVerification");
    if (list) {
      // Set custom styles using the style property
      list.style.display = "none";
    } else {
      console.error("list element not found.");
    }
  }

  function showList() {
    var list = document.getElementById("listOfUserVerification");
    if (list) {
      // Set custom styles using the style property
      list.style.display = "block";
    } else {
      console.error("list element not found.");
    }
  }

  function handleVerify(id) {
    alert(`${id}`);
  }

  return (
    <>
      <Card>
        <Card.Header as="h6">{title}</Card.Header>
        <Card.Body>
          <Container fluid>
            <Form noValidate validated={validated}>
              <Row className="mb-3">
                <Form.Group as={Col} md="4" controlId="userId">
                  <InputGroup className="mb-3">
                    <InputGroup.Text>NIP / NIP / Vendor NIP</InputGroup.Text>
                    <Form.Control
                      required
                      type="text"
                      name="userId"
                      placeholder="NIP / NIP / Vendor NIP"
                      maxLength={7}
                      value={formData.userId}
                      onChange={changeData}
                    />
                    <Form.Control.Feedback type="invalid">
                      User Id is required field.
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="name">
                  <InputGroup className="mb-3">
                    <InputGroup.Text>Name</InputGroup.Text>
                    <Form.Control
                      required
                      type="text"
                      name="name"
                      placeholder="Name"
                      maxLength={32}
                      value={formData.name}
                      onChange={changeData}
                    />
                    <Form.Control.Feedback type="invalid">
                      Name is required field.
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
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
                <Form.Group as={Col} md="4" controlId="branchCode">
                  <InputGroup className="mb-3">
                    <InputGroup.Text>Branch Code</InputGroup.Text>
                    <Form.Control
                      required
                      type="text"
                      name="branchCode"
                      placeholder="Branch Code"
                      maxLength={4}
                      value={formData.branchCode}
                      onChange={changeData}
                    />
                    <Form.Control.Feedback type="invalid">
                      Branch code is required field.
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
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
                      maxLength={4}
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
            <div id="listOfUserVerification" className="list__of__user__verify">
              {loading ? (
                <p>Loading...</p>
              ) : (
                <Table responsive striped bordered hover>
                  <thead>
                    <th>NIP / NIK/ Vendor NIP</th>
                    <th>Name</th>
                    <th>User Group</th>
                    <th>Branch Code</th>
                    <th>Office Code</th>
                    <th className="text__center">Action</th>
                  </thead>
                  <tbody>
                    {searchResults.map((item) => (
                      <tr key={item.id}>
                        <td>{item.userId}</td>
                        <td>{item.name}</td>
                        <td>{item.userGroup}</td>
                        <td>{item.branchCode}</td>
                        <td>{item.officeCode}</td>
                        <td className="text__center">
                          <button
                            className="btn btn-primary btn-sm"
                            onClick={() => handleVerify(item.id)}
                          >
                            Verify Images
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              )}
            </div>
          </Container>
        </Card.Body>
      </Card>
    </>
  );
}

export default InquiryVerificationImages;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotate, faSearch } from "@fortawesome/free-solid-svg-icons";
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
import { EnumOfActivity, EnumOfOrderBy, EnumOfSortBy } from "../../data";
import "./inquiryactivityuser.css";

function InquiryActivityUser({ title }) {
  const [validated, setValidated] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const initialFormState = {
    branchCode: "",
    officeCode: "",
    startPeriod: "",
    endPeriod: "",
    activity: 1,
    orderBy: 1,
    sortBy: 1,
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
      fetch("/src/dummy/activity.json")
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

    if (!data.branchCode.trim()) {
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
    var list = document.getElementById("listOfActivity");
    if (list) {
      // Set custom styles using the style property
      list.style.display = "none";
    } else {
      console.error("list element not found.");
    }
  }

  function showList() {
    var list = document.getElementById("listOfActivity");
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
                <Form.Group as={Col} md="8" controlId="branchCode">
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
                      Branch code is required.
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
                <Form.Group as={Col} md="2" controlId="startPeriod">
                  <InputGroup className="mb-3">
                    <InputGroup.Text>Start Period</InputGroup.Text>
                    <Form.Control
                      required
                      type="date"
                      name="startPeriod"
                      value={formData.startDate}
                      onChange={changeData}
                    />
                    <Form.Control.Feedback type="invalid">
                      Start period is required field.
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
                <Form.Group as={Col} md="2" controlId="endPeriod">
                  <InputGroup className="mb-3">
                    <InputGroup.Text>End Period</InputGroup.Text>
                    <Form.Control
                      required
                      type="date"
                      name="endPeriod"
                      value={formData.endPeriod}
                      onChange={changeData}
                    />
                    <Form.Control.Feedback type="invalid">
                      End period is required.
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} md="4" controlId="officeCode">
                  <InputGroup className="mb-3">
                    <InputGroup.Text>Office Code</InputGroup.Text>
                    <Form.Control
                      type="text"
                      placeholder="Office Code"
                      required
                      name="officeCode"
                      value={formData.officeCode}
                      onChange={changeData}
                      maxLength={4}
                    />
                    <Form.Control.Feedback type="invalid">
                      Office code is required.
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="activity">
                  <InputGroup className="mb-3">
                    <InputGroup.Text>Activity</InputGroup.Text>
                    <Form.Control
                      as="select"
                      name="activity"
                      value={formData.activity}
                      onChange={changeData}
                    >
                      {EnumOfActivity.map((item) => (
                        <option key={item.id} value={item.id}>
                          {item.label}
                        </option>
                      ))}
                    </Form.Control>
                  </InputGroup>
                </Form.Group>
                <Form.Group as={Col} md="2" controlId="orderBy">
                  <InputGroup className="mb-3">
                    <InputGroup.Text>Order by</InputGroup.Text>
                    <Form.Control
                      as="select"
                      name="orderBy"
                      value={formData.orderBy}
                      onChange={changeData}
                    >
                      {EnumOfOrderBy.map((item) => (
                        <option key={item.id} value={item.id}>
                          {item.label}
                        </option>
                      ))}
                    </Form.Control>
                  </InputGroup>
                </Form.Group>
                <Form.Group as={Col} md="2" controlId="sortBy">
                  <InputGroup className="mb-3">
                    <InputGroup.Text>Sort by</InputGroup.Text>
                    <Form.Control
                      as="select"
                      name="sortBy"
                      value={formData.sortBy}
                      onChange={changeData}
                    >
                      {EnumOfSortBy.map((item) => (
                        <option key={item.id} value={item.id}>
                          {item.label}
                        </option>
                      ))}
                    </Form.Control>
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
            <div id="listOfActivity" className="list__of__activity">
              {loading ? (
                <p>Loading...</p>
              ) : (
                <Table responsive striped bordered hover>
                  <thead>
                    <th>Branch Code</th>
                    <th>Office Code</th>
                    <th>Created Date</th>
                    <th>Created By</th>
                    <th>Login ID</th>
                    <th>Activity</th>
                  </thead>
                  <tbody>
                    {searchResults.map((item) => (
                      <tr key={item.id}>
                        <td>{item.branchCode}</td>
                        <td>{item.officeCode}</td>
                        <td>{item.createdDate}</td>
                        <td>{item.createdBy}</td>
                        <td>{item.loginId}</td>
                        <td>{item.activity}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              )}
            </div>
          </Container>
        </Card.Body>
      </Card>
      <br />
    </>
  );
}

export default InquiryActivityUser;

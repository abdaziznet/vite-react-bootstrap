import { Card, Table } from "react-bootstrap";

function CardInfo({ title, data }) {
  return (
    <>
      <Card>
        <Card.Header as="h6">{title}</Card.Header>
        <Card.Body>
          <Table responsive>
            <tr>
              <td>Login ID</td>
              <td>: {data.loginId}</td>
              <td>Office Code</td>
              <td>: {data.officeCode}</td>
            </tr>
            <br />
            <tr>
              <td>Name</td>
              <td>: {data.name}</td>
              <td>User Group</td>
              <td>: {data.userGroup}</td>
            </tr>
            <br />
            <tr>
              <td>Branch Code</td>
              <td>: {data.branchCode}</td>
              <td>Last Login</td>
              <td>: {data.lastLogin}</td>
            </tr>
          </Table>
        </Card.Body>
      </Card>
      <br />
    </>
  );
}

export default CardInfo;

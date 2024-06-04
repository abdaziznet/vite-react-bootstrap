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
              <td>: {data.LogonId}</td>
              <td>Office Code</td>
              <td>: {data.OfficeCode}</td>
            </tr>
            <br />
            <tr>
              <td>Name</td>
              <td>: {data.Name}</td>
              <td>User Group</td>
              <td>: {data.GroupUser}</td>
            </tr>
            <br />
            <tr>
              <td>Branch Code</td>
              <td>: {data.BranchCode}</td>
              <td>Last Login</td>
              <td>: {data.LastLoginTime}</td>
            </tr>
          </Table>
        </Card.Body>
      </Card>
      <br />
    </>
  );
}

export default CardInfo;

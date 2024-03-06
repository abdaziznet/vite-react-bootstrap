import { Card, Table } from "react-bootstrap";
import "./cardinfo.css";

function CardInfo({ title }) {
  return (
    <>
      <Card>
        <Card.Header as="h6">{title}</Card.Header>
        <Card.Body>
          <Table responsive>
            <tr>
              <td>Login ID</td>
              <td>: 000000</td>
              <td>Office Code</td>
              <td>: 000</td>
            </tr>
            <br />
            <tr>
              <td>Name</td>
              <td>: Alessandro Delpiero</td>
              <td>User Group</td>
              <td>: Manager</td>
            </tr>
            <br />
            <tr>
              <td>Branch Code</td>
              <td>: 0100</td>
              <td>Last Login</td>
              <td>: 07/02/2024 08:00:21</td>
            </tr>
          </Table>
        </Card.Body>
      </Card>
      <br />
    </>
  );
}

export default CardInfo;

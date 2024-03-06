import { Table } from "react-bootstrap";
import "./listview.css";

function ListView() {
  return (
    <div style={{ height: "550px", overflowY: "auto" }}>
      <Table
        striped
        bordered
        hover
        size="sm"
        className="text-center table__fixed__header"
      >
        <thead>
          <tr>
            <th>Branch Code</th>
            <th>Percentage</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>0100-000</td>
            <td>20%</td>
          </tr>
          <tr>
            <td>0100-000</td>
            <td>30%</td>
          </tr>
          <tr>
            <td>0100-000</td>
            <td>30%</td>
          </tr>
          <tr>
            <td>0100-000</td>
            <td>30%</td>
          </tr>
          <tr>
            <td>0100-000</td>
            <td>30%</td>
          </tr>
          <tr>
            <td>0100-000</td>
            <td>30%</td>
          </tr>
          <tr>
            <td>0100-000</td>
            <td>30%</td>
          </tr>
          <tr>
            <td>0100-000</td>
            <td>30%</td>
          </tr>
          <tr>
            <td>0100-000</td>
            <td>30%</td>
          </tr>
          <tr>
            <td>0100-000</td>
            <td>30%</td>
          </tr>
          <tr>
            <td>0100-000</td>
            <td>30%</td>
          </tr>
          <tr>
            <td>0100-000</td>
            <td>30%</td>
          </tr>
          <tr>
            <td>0100-000</td>
            <td>30%</td>
          </tr>
          <tr>
            <td>0100-000</td>
            <td>30%</td>
          </tr>
          <tr>
            <td>0100-000</td>
            <td>30%</td>
          </tr>
          <tr>
            <td>0100-000</td>
            <td>30%</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default ListView;

import { Table } from "react-bootstrap";
import "./listview.css";

function ListView({ data }) {
  return (
    <div style={{ height: "550px", overflowY: "auto" }}>
      <Table
        striped
        bordered
        hover
        size="sm"
        className="text-center table__fixed__header card__custom"
      >
        <thead>
          <tr>
            <th>Branch Code</th>
            <th>Percentage</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              {Object.values(item).map((value, subIndex) => (
                <td key={subIndex}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default ListView;

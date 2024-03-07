import { Table } from "react-bootstrap";

function ListOfUserReconstructImageComponent({ jsonData }) {
  return (
    <Table responsive>
      <thead>
        <tr>
          <th>NIP / NIK/ Vendor NIP</th>
          <th>Name</th>
          <th>User Group</th>
          <th>Branch Code</th>
          <th>Office Code</th>
          <th>Reconstruct Fingerprint Image Status</th>
        </tr>
      </thead>
      <tbody>
        {jsonData.map((item, index) => (
          <tr key={index}>
            {Object.values(item).map((value, subIndex) => (
              <td key={subIndex}>{value}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default ListOfUserReconstructImageComponent;

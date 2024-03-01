import Card from "react-bootstrap/Card";

function CountCard({ title, value }) {
  return (
    <>
      <Card border="primary" style={{ width: "18rem" }}>
        <Card.Header>{title}</Card.Header>
        <Card.Body>
          <Card.Title>{value}</Card.Title>
        </Card.Body>
      </Card>
      <br />
    </>
  );
}

export default CountCard;

import Card from "react-bootstrap/Card";

function CountCard({ title, value }) {
  return (
    <>
      <Card className="text-center" style={{ width: "18rem" }}>
        <Card.Header as="h6">{title}</Card.Header>
        <Card.Body>
          <Card.Title as="h1">{value}</Card.Title>
        </Card.Body>
      </Card>
      <br />
    </>
  );
}

export default CountCard;

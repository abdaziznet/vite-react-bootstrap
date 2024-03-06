import { Card } from "react-bootstrap";

function CountCard({ title, value }) {
  return (
    <>
      <div className="card__custom">
        <Card className="text-center" style={{ width: "18rem" }}>
          <Card.Header as="h6">{title}</Card.Header>
          <Card.Body>
            <Card.Title as="h1">{value}</Card.Title>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default CountCard;

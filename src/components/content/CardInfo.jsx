import Card from "react-bootstrap/Card";
import LoginInfo from "./LoginInfo";

function CardInfo({ title }) {
  return (
    <>
      <Card border="primary" style={{ width: "70rem" }}>
        <Card.Header>{title}</Card.Header>
        <Card.Body>
          <LoginInfo />
        </Card.Body>
      </Card>
      <br />
    </>
  );
}

export default CardInfo;

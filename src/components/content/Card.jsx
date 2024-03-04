import { Link } from "react-router-dom";
import "./card.css";
import { faFingerprint } from "@fortawesome/free-solid-svg-icons";
import { Button, Card } from "react-bootstrap";

function CardItem({ img, title, desc, linkTo }) {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{desc}</Card.Text>
          <Link to={linkTo}>
            <Button>Go to</Button>
          </Link>
        </Card.Body>
      </Card>
      <br />
    </>
  );
}

export default CardItem;

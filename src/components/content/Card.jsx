import { Link } from "react-router-dom";
import "./card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronRight } from "@fortawesome/free-solid-svg-icons";
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
            <Button>
              {title}
              <FontAwesomeIcon icon={faCircleChevronRight} className="ms-2" />
            </Button>
          </Link>
        </Card.Body>
      </Card>
      <br />
    </>
  );
}

export default CardItem;

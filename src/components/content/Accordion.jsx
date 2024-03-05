import { Accordion } from "react-bootstrap";
import LoginInfo from "./LoginInfo";

function AccordionItem() {
  return (
    <Accordion defaultActiveKey="1">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Login Information</Accordion.Header>
        <Accordion.Body>
          <LoginInfo />
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default AccordionItem;

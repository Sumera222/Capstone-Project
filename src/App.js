import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button, CardColumns } from "react-bootstrap";

function CardDisplay() {
  return (
    <CardColumns>
      <Card>
        <Card.Img variant="top" src="images/tech(1).jpg" />
        <Card.Body>
          <Card.Title>Our Services </Card.Title>
          <Card.Text>
            See what services are circle offering to our youth
            {" "}
          </Card.Text>
        </Card.Body>
        <Card.Button>
        <Button variant="primary">Read More...</Button>
        </Card.Button>
      </Card>

      <Card>
        <Card.Img variant="top" src="images/tech2.jpg" />
        <Card.Body>
          <Card.Title>Our Courses</Card.Title>
          <Card.Text>
            Cicle offering many Courses to inhance 
            youth's grooming.{" "}
          </Card.Text>
        </Card.Body>
        <Card.Button>
        <Button variant="primary">Read More...</Button>
        </Card.Button>
      </Card>

      <Card>
        <Card.Img variant="top" src="images/tech3.jpg" />
        <Card.Body>
          <Card.Title>Our Alumni stories</Card.Title>
          <Card.Text>
            Read ou Alumni stories, how Cicle impact their journey towards technology.
            {" "}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <Button variant="primary">Read More...</Button>
        </Card.Footer>
      </Card>
    </CardColumns>
  );
}
function App() {
  return (
    <div>
      <CardDisplay />
    </div>
  );
}

export default App;


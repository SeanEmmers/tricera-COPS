import React from "react";
import { Link } from "react-router-dom";
import { Container, Button, Col, Row, Card, Img } from "react-bootstrap";
import "./about.css";
import camilla from "./aboutImages/camilla.jpg";
// import Poster from "./HomeImage/Home_Page.png";

const About = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <br />
            <br />

            <Card className="cards">
              <Card.Img variant="top" src={camilla} />
              <Card.Body>
                <Card.Title>Camilla</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button
                  variant="primary"
                  href="https://github.com/camilla000"
                  target="_blank"
                >
                  GitHub
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <br />
            <br />
            <Card className="cards">
              <Card.Img variant="top" src={camilla} />
              <Card.Body>
                <Card.Title>Camilla</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button
                  variant="primary"
                  href="https://github.com/camilla000"
                  target="_blank"
                >
                  GitHub
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <br />
            <br />
            <Card className="cards">
              <Card.Img variant="top" src={camilla} />
              <Card.Body>
                <Card.Title>Camilla</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button
                  variant="primary"
                  href="https://github.com/camilla000"
                  target="_blank"
                >
                  GitHub
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col>
            <br />
            <br />
            <Card className="cards">
              <Card.Img variant="top" src={camilla} />
              <Card.Body>
                <Card.Title>Camilla</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button
                  variant="primary"
                  href="https://github.com/camilla000"
                  target="_blank"
                >
                  GitHub
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <br />
            <br />
            <Card className="cards">
              <Card.Img variant="top" src={camilla} />
              <Card.Body>
                <Card.Title>Camilla</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button
                  variant="primary"
                  href="https://github.com/camilla000"
                  target="_blank"
                >
                  GitHub
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <br />
            <br />
            <Card className="cards">
              <Card.Img variant="top" src={camilla} />
              <Card.Body>
                <Card.Title>Camilla</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button
                  variant="primary"
                  href="https://github.com/camilla000"
                  target="_blank"
                >
                  GitHub
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;

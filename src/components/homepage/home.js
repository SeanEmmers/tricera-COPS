import React from 'react'
import {Link} from 'react-router-dom'
import { Container, Button, Col, Row } from "react-bootstrap";
import "./home.css";

const Home = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <br />
            <br />
            <Link to="/play">
              <img
                src="https://static3.srcdn.com/wordpress/wp-content/uploads/2021/02/Hamilton-Schuyler-Sisters.jpg?q=50&fit=crop&w=960&h=500&dpr=1.5"
                alt=""
              />
              <br />
              <br />
              <div className="playButton">
                <Button variant="danger" size="lg">
                  Let's Play, Bitch!!
                </Button>
              </div>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./Home.css";

const Home = () => {
  return (
    <div className="HomeTextContainer">
      <Container>
        <Row>
          
          <Col>
            <div className="HomeText">
              <div className="text-left">
              <h1>
                Hello
                <span className="HelloDot">.</span>
              </h1>
              <h1>I am</h1>
              <h1>Patrick</h1>
            </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;

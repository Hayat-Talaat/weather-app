import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import './UI.css'

const FormWeather = props => {
  return (
    <Form onSubmit={props.getWeather} className="getWeather py-4">
      <Row>
        <Col></Col>
        <Col sm={6} className="rm-px-right">
          <Form.Control className="city" type="text" placeholder="City" name="city" />
        </Col>
        <Col sm={3} className="rm-px-left">
          <Button variant="primary" type="submit">
            Find
          </Button>
        </Col>
        <Col></Col>
      </Row>
    </Form>
  );
};

export default FormWeather;

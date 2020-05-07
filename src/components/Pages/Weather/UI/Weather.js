import React from "react";
import { Row, Col, Container } from "react-bootstrap";

const Weather = ({
  description,
  country,
  error,
  temperature,
  name,
  icon,
  tempMax,
  tempMin,
  main
}) => {
  return (
    <div className="py-4">
      <Row>
        <Col>
          <h2>
            {name && <span>{name + ", "}</span>}
            {country && <span>{country}</span>}
          </h2>
          {main && <span className="main">{main}</span>}
        </Col>
      </Row>
      <Row>
        <Col>
          {temperature && <h1 className="temperature">{temperature}&deg;</h1>}
        </Col>
      </Row>
      <Row>
        <Col>
          {tempMax && (
            <span className="min-max">
              {tempMax}&deg;
              <span className="min-max-slach"> / </span>
            </span>
          )}
          {tempMin && <span className="min-max">{tempMin}&deg;</span>}
        </Col>
      </Row>
      <Row>
        <Col>
          {description && <p className="description"> {description}</p>}
        </Col>
      </Row>
      <Row>
        <Col>{error && <p>{error}</p>}</Col>
      </Row>
    </div>

    // <div>

    //   <div>
    //     <img
    //       alt="test"
    //       src={`http://openweathermap.org/img/wn/${icon && icon}@2x.png`}
    //     />
    //   </div>
    // </div>
  );
};

export default Weather;

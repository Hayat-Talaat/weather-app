import React, { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";

import Form from "./UI/Form";
import Weather from "./UI/Weather";
import './Weather.css'

function WeatherApp() {
  const [weather, setWeather] = useState([]);
  const API_KEY = "9f43c40824be730de2e27d1814061aed";

  async function fetchData(e) {
    const city = e.target.elements.city.value;

    e.preventDefault();
    const apiData = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    )
      .then(res => res.json())
      .then(data => data);

    console.log("api data", apiData);
    if (city) {
      setWeather({
        data: apiData,

        name: apiData.name,
        country: apiData.sys.country,

        icon: apiData.weather[0].icon,
        main: apiData.weather[0].main,

        temperature: Math.floor(apiData.main.temp - 273.15),
        max: Math.floor(apiData.main.temp_max - 273.15),
        min: Math.floor(apiData.main.temp_min - 273.15),

        description: apiData.weather[0].description,
        error: ""
      });
    } else {
      setWeather({
        data: "",
        city: "",
        country: "",
        icon: "",
        description: "",
        temperature: "",
        error: "Please Type A City And Country"
      });
    }
  }

  return (
    <div className="WeatherApp">
      <Container>
        <Row>
          <Col>
            <div className="text-center py-4">
              <h1>Just type the city name</h1>
              <h5>you must spelling correctly</h5>
            </div>
          </Col>
        </Row>
        <Form getWeather={fetchData} />
        <Weather
          name={weather.name}
          country={weather.country}
          icon={weather.icon}
          main={weather.main}
          tempMax={weather.max}
          tempMin={weather.min}
          description={weather.description}
          temperature={weather.temperature}
          error={weather.error}
        />
      </Container>
    </div>
  );
}

export default WeatherApp;

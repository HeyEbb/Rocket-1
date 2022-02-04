import React, { useEffect, useState } from "react";
import ReactDOM, { render } from "react-dom";
// importing images
import Logo from "../images/spaceXlogo.png";
import HomeHero from "../images/homeHero.png";
import axios from "axios";

import Header from "../components/header";
import SubpageHeader from "../components/subpageHeader";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Col, Row } from "react-bootstrap";

export default function Rocket() {
  const [rocket, setRocket] = useState(null);

  useEffect(() => {
    axios
      .get("https://api.spacexdata.com/v3/rockets")
      .then((response) => setRocket(response.data))
      .then(console.log(rocket));
  }, []);

  return (
    <>
      <Header />
      <SubpageHeader title="Rockets" />
      <div className="categoryHero">
        <Row>
          {rocket &&
            rocket.map((rocket, index) => {
              return (
                <>
                  <Col xl={3}>
                    <div className="listingContainer">
                      <div className="book" key={index}>
                        <h2>{rocket.rocket_name}</h2>
						<img
                            className="cardImage"
                            src={rocket.flickr_images}
                            alt="new"
                          />
						<h3>{rocket.active}</h3>
						<h3>Height: {rocket.height.meters}</h3>
                        <h3>Mass: {rocket.mass.kg}kg</h3>
						<h3>Country: {rocket.country}</h3>
						<h3>Company: {rocket.company}</h3>
                        <div className="details"></div>
                      </div>
                    </div>
                  </Col>
                </>
              );
            })}
        </Row>
      </div>
    </>
  );
}

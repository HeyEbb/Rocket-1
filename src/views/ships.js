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

export default function Ships() {
  const [rocket, setRocket] = useState(null);

  useEffect(() => {
    axios
      .get("https://api.spacexdata.com/v3/ships")
      .then((response) => setRocket(response.data))
      .then(console.log(rocket));
  }, []);

  return (
    <>
      <Header />
      <SubpageHeader title="Ships" />
      <div className="categoryHero">
        <Row>
          {rocket &&
            rocket.map((ship, index) => {
              return (
                <>
                  <Col xl={3}>
                    <div className="cardContainer">
                      <div className="book" key={index}>
                        <h2>{ship.ship_name}</h2>
                        <img
                          className="cardImage"
                          src={ship.image}
                          onError={({ currentTarget }) => {
                            currentTarget.onerror = null; // prevents looping
                            currentTarget.src = {Logo};
                          }}
                          alt="new"
                        />
                        <h3>Home port: {ship.home_port}</h3>
                        <h3>Year built: {ship.year_built}</h3>
                        <h3>Ship Type: {ship.ship_type}</h3>
                        <h3>Weight: {ship.weight_kg}kg</h3>
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

import React, { useState } from "react";
import ReactDOM, { render } from "react-dom";
// importing paackages
import { Animated } from "react-animated-css";

// importing images
import Logo from "../images/spaceXlogo.png";
import HomeHero from "../images/homeHero.png";
import RocketThumb from "../images/rocketThumb.png";
import DragonThumb from "../images/dragonThumb.png";
import ShipThumb from "../images/shipThumb.png";
// importing components
import Header from "../components/header";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Col, Row } from "react-bootstrap";

export default function Home() {
  const [rocket, setRocket] = useState(null);

  return (
    <>
      <div
        className="homeHero"
        style={{
          backgroundImage: `url(${HomeHero})`,
        }}
      >
        <Header />
        <div className="titleContainer">
          <div className="titleText">
            <Animated animationIn="fadeInUp" isVisible={true}>
              <h1>Ready for liftoff?</h1>
            </Animated>
          </div>
          <Animated animationIn="fadeIn" isVisible={true} animationInDelay={500}>
            <p className="subTitleText">
              Our brand new mission control app gives you access to all of the
              SpaceX data you’ll ever need.
            </p>
          </Animated>
        </div>
      </div>
      <div className="categoryHero">
        <Row>
          <Col xl={3}>
            <div
              className="cardCategory"
              style={{
                backgroundImage: `url(${RocketThumb})`,
              }}
            >
              <Link to="/rocket">Rockets</Link>
            </div>
          </Col>
          <Col xl={3}>
            <div
              className="cardCategory"
              style={{
                backgroundImage: `url(${DragonThumb})`,
              }}
            >
              <Link to="/dragons">Dragons</Link>
            </div>
          </Col>
          <Col xl={3}>
            <div
              className="cardCategory"
              style={{
                backgroundImage: `url(${ShipThumb})`,
              }}
            >
              <Link to="/ships">Ships</Link>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}

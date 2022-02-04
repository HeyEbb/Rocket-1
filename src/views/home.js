import React, { useState } from "react";

// importing packages
import { Animated } from "react-animated-css";
import Tilty from "react-tilty";
import { Col, Row } from "react-bootstrap";
import { BrowserRouter as Link } from "react-router-dom";

// importing images
import HomeHero from "../images/homeHero.png";
import RocketThumb from "../images/rocketThumb.png";
import DragonThumb from "../images/dragonThumb.png";
import ShipThumb from "../images/shipThumb.png";

// importing components
import Header from "../components/header";

export default function Home() {
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
          <Animated
            animationIn="fadeIn"
            isVisible={true}
            animationInDelay={500}
          >
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
            <Tilty scale={1.1}>
              <Link to="/rocket">
                <div
                  className="cardCategory"
                  style={{
                    backgroundImage: `url(${RocketThumb})`,
                  }}
                >
                  Rockets
                </div>
              </Link>
            </Tilty>
          </Col>
          <Col xl={3}>
            <Tilty scale={1.1}>
              <Link to="/dragons">
                <div
                  className="cardCategory"
                  style={{
                    backgroundImage: `url(${DragonThumb})`,
                  }}
                >
                  Dragons
                </div>
              </Link>
            </Tilty>
          </Col>
          <Col xl={3}>
            <Tilty scale={1.1}>
              <Link to="/ships">
                <div
                  className="cardCategory"
                  style={{
                    backgroundImage: `url(${ShipThumb})`,
                  }}
                >
                  Ships
                </div>
              </Link>
            </Tilty>
          </Col>
        </Row>
      </div>
    </>
  );
}

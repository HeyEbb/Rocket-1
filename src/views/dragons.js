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

export default function Dragons() {
  const [rocket, setRocket] = useState(null);

  useEffect(() => {
    axios
      .get("https://api.spacexdata.com/v3/dragons")
      .then((response) => setRocket(response.data))
      .then(console.log(rocket));
  }, []);

  function truncateString(str, num) {
    if (str.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  }

  return (
    <>
      <Header />
      <SubpageHeader title="Dragons" />
      <div className="categoryHero">
        <Row>
          {rocket &&
            rocket.map((dragon, index) => {
              // const cleanedDate = new Date(book.released).toDateString();
              // const authors = book.authors.join(", ");

              return (
                <>
                  <Col xl={3}>
                    <div className="cardContainer">
                      <div key={index}>
                        <h3>{dragon.name}</h3>
                        <h2>{dragon.name}</h2>
                        <img
                          className="cardImage"
                          src={dragon.flickr_images}
                          alt="new"
                        />
                        <p>{truncateString(dragon.description, 200)}</p>
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

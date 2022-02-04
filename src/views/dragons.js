import React, { Component, useEffect, useState } from "react";

// importing packages
import axios from "axios";
import { Col, Row } from "react-bootstrap";

// importing components
import Header from "../components/header";
import SubpageHeader from "../components/subpageHeader";

export default function Dragons() {
  const [rocket, setRocket] = useState(null);

  useEffect(() => {
    // using axios to grab API data
    axios
      .get("https://api.spacexdata.com/v3/dragons")
      .then((response) => setRocket(response.data));
  }, []);

  // utility function to truncate descriptions
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
              return (
                <>
                  <Col xl={3}>
                    <div className="cardContainer">
                      <div key={index}>
                        <h3>{dragon.type}</h3>
                        <h2>{dragon.name}</h2>
                        <img
                          className="cardImage"
                          src={dragon.flickr_images}
                          alt={dragon.name}
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

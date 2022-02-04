import React, { useEffect, useState } from "react";

// importing packages
import axios from "axios";
import { Col, Row } from "react-bootstrap";

// importing components
import SubpageHeader from "../components/subpageHeader";
import Header from "../components/header";

export default function Ships() {
  const [rocket, setRocket] = useState(null);

  useEffect(() => {
    axios
      .get("https://api.spacexdata.com/v3/ships")
      .then((response) => setRocket(response.data));
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
                      <div key={index}>
                        <h2>{ship.ship_name}</h2>
                        <img
                          className="cardImage"
                          src={ship.image}
                          alt={ship.ship_name}
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

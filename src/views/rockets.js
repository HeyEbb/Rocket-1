import React, { useEffect, useState } from "react";

// importing packages
import axios from "axios";
import { Col, Row } from "react-bootstrap";

// importing componensts
import Header from "../components/header";
import SubpageHeader from "../components/subpageHeader";

export default function Rocket() {
  const [rocket, setRocket] = useState(null);

  useEffect(() => {
    axios
      .get("https://api.spacexdata.com/v3/rockets")
      .then((response) => setRocket(response.data));
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
                      <div key={index}>
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

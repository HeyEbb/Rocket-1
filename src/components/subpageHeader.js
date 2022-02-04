import React, { useState } from "react";

// importing images
import Logo from "../images/spaceXlogo.png";

export default function SubpageHeader(props) {
  return (
    <>
      <div className="subpageHeader">
        <h1>{props.title}</h1>
      </div>
    </>
  );
}

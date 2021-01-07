import React from "react";
import { Link, withRouter } from "react-router-dom";

function Info() {
  return (
    <div className="flex">
      <div className="por">
        <div className="imageCard">
          <div className="infoHead">
            <span className="cardTitle">@calv</span>
            <div className="dot cloud"></div>
          </div>
          <img
            className="infoImage"
            width="400px;"
            src="/images/info.png"
            alt="portrait"
          />
          <div className="infoTextDiv">
            <span className="infoText">
              {" "}
              Calvary Fisher is a speculative designer exploring remote
              possibilities in system-centered design. He lives inLos Angeles,
              California, and enjoys reading, running, and reality.
            </span>
          </div>
        </div>

        <div className="imageCard">
          <div className="linkBox">
            <Link to="/" className="exLink">
              Instagram &#8594;
            </Link>
            <Link to="/" className="exLink">
              Twitter &#8594;
            </Link>
            <Link to="/" className="exLink">
              Tiktok &#8594;
            </Link>
            <Link to="/" className="exLink">
              Medium &#8594;
            </Link>
            <Link to="/" className="exLink">
              Linkedin &#8594;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;

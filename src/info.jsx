import React from "react";
import { Link, withRouter } from "react-router-dom";

function Info() {
  return (
    <div className="flex">
      <div className="por">
        <div className="imageCard">
          <div className="infoHead">
            <span className="cardTitle">@calv</span>
            <div className="dot crust"></div>
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
              Instagram{" "}
            </Link>
            <Link to="/" className="exLink">
              Twitter
            </Link>
            <Link to="/" className="exLink">
              Tiktok
            </Link>
            <Link to="/" className="exLink">
              Medium
            </Link>
            <Link to="/" className="exLink">
              Linkedin
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;

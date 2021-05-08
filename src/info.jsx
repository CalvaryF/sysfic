import React from "react";
import { Link, withRouter } from "react-router-dom";
import Intro from "./components/pageIntro";

function Info() {
  return (
    <>
      <div className="flex">
        <div className="por">
          <div className="imageCard light">
            <div className="infoHead">
              <span className="cardTitle">INFO</span>
              <div className="dot cloud"></div>
            </div>
            <div className="infoTextDiv">
              Systems Fiction was created by Calvary Fisher who currently
              resides in Los Angeles and works as a graphic designer. It is the
              result of a desire to synthesize a disparate set of interests into
              one body of work. If any of it resonates, please don’t hesitate to
              reach out and say hello.{" "}
            </div>
          </div>
          <div className="imageCard">
            <div className="infoHead">
              <span className="cardTitle">CALV</span>
              <div className="dot cloud"></div>
            </div>
            <img className="infoImage" src="/images/info.png" alt="portrait" />
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
    </>
  );
}

export default Info;

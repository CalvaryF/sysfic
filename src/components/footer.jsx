import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div className="footerMain">
        <div className="links">
          <div className="linkContainer">
            <Link to="/" className="footerLink">
              Youtube{" "}
            </Link>
            <Link to="/" className="footerLink">
              Instagram{" "}
            </Link>
            <Link to="/" className="footerLink">
              Linkedin{" "}
            </Link>
            <Link to="/" className="footerLink">
              Medium{" "}
            </Link>
            <Link to="/" className="footerLink">
              Twitter{" "}
            </Link>
          </div>
          <div className="copyright"> &copy; Calvary Fisher 2021 </div>
        </div>
        <div className="contactContainer">
          <div className="contact"> For business inquiries:</div>
          <Link to="/" className="contactButton">
            Email me &#8594;
          </Link>{" "}
        </div>
      </div>
    );
  }
}

export default withRouter(Header);

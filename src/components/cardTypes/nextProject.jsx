import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

class Card extends Component {
  state = {
    Title: this.props.title,
    Image: this.props.image,
  };
  render() {
    return (
      <div className="nextProjectContainer">
        <div className="nextProjectContainer2">
          <div className="nextProjectDivider"></div>

          <Link className="nextProject" to="/">
            <div className="projectCardHead lighten">
              <span className="projectCardTitle darken">
                next project &#8594;
              </span>
              <div className="dot red"></div>
            </div>

            <div className="nextProjectBody">
              <div className="nextProjectTextContainer">
                <div className="nextProjectName"> {this.state.Title} </div>
                <div className="nextProjectText">
                  {" "}
                  Lorem ipsum dolor sit amet, con sectetuer adipiscing elit,
                  diam
                </div>
              </div>

              <div className="nextImage">
                <img className="nextImageImage" src={this.state.Image} />
              </div>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

export default Card;

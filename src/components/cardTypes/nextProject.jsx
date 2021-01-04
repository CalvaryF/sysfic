import React, { Component } from "react";

class Card extends Component {
  state = {
    Title: this.props.title,
  };
  render() {
    return (
      <div className="nextProjectContainer">
        <div className="nextProjectContainer2">
          <div className="nextProjectDivider"></div>

          <div className="nextProject">
            <div className="projectCardHead lighten">
              <span className="projectCardTitle darken">
                next project &#8594;
              </span>
              <div className="dot cloud"></div>
            </div>

            <div className="nextProjectBody">
              <div className="nextProjectTextContainer"></div>

              <div className="nextImage"> </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;

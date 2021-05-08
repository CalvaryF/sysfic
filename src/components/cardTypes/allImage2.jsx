import React, { Component } from "react";
import ImageZoom from "./imageZoom";
import mediumZoom from "medium-zoom";

class Card extends Component {
  zoom = mediumZoom({
    background: "#000",
    margin: 20,
    scrollOffset: 0,
    container: {
      top: 64,
    },
  });
  zoomMobile = mediumZoom({
    background: "#000",
    margin: 0,
    scrollOffset: 0,
    container: {
      top: 64,
    },
  });

  state = {
    Title: this.props.title,
    Caption: this.props.caption,
    Subtitle1: this.props.subtitle1,
    Subtitle2: this.props.subtitle2,
    Image: this.props.image,
    ImageMobile: this.props.imageMobile,
  };

  render() {
    return (
      <div className="projectCardDiv noPadding">
        <div className="projectCardHead lighten">
          <span className="projectCardTitle lighten">{this.state.Title}</span>

          <div className="dot cloud"></div>
        </div>

        <div className="projectCardImage2Body">
          <div className="projectCardImage des">
            <ImageZoom
              className="projectCardImageImage"
              src={this.state.Image}
              zoom={this.zoom}
              color="#d9d9d9"
            />
          </div>

          <div className="projectCardImage mob">
            <img
              src={this.state.ImageMobile}
              className="projectCardImageImage"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Card;

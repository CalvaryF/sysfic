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
      <div className="projectCardDiv">
        <div className="projectCardHead">
          <span className="projectCardTitle">{this.state.Title}</span>
          <div className="dot"></div>
        </div>

        <div className="projectCardBody">
          <div className="projectCardCopy">
            <div className="projectCardSubtitle"> {this.state.Subtitle1} </div>
            <div className="projectCardParagraph">
              {" "}
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat.{" "}
            </div>
          </div>

          <div className="projectCardImageBody">
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
            <div className="projectCardCaption"> {this.state.Caption} </div>
          </div>
          <br></br>
          <br></br>

          <div className="projectCardCopy">
            <div className="projectCardSubtitle"> Remember Where You Are </div>
            <div className="projectCardParagraph">
              {" "}
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat.{" "}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;

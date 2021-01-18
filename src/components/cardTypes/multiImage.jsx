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

  state = {
    Title: this.props.title,
    Caption1: this.props.caption1,
    Caption2: this.props.caption2,
    Caption3: this.props.caption3,
    Caption4: this.props.caption4,
    CaptionHead1: this.props.captionHead1,
    CaptionHead2: this.props.captionHead2,
    CaptionHead3: this.props.captionHead3,
    CaptionHead4: this.props.captionHead4,
    Image1: this.props.image1,
    Image2: this.props.image2,
    Image3: this.props.image3,
    Image4: this.props.image4,
  };
  render() {
    return (
      <div className="projectCardDiv grey">
        <div className="projectCardHead">
          <span className="projectCardTitle">{this.state.Title}</span>
          <div className="dot"></div>
        </div>

        <div className="projectMultiImageBody">
          <div className="multiImageContainer">
            <div className="multiImageImage des">
              <ImageZoom
                className="projectCardImageImage"
                src={this.state.Image1}
                zoom={this.zoom}
                color="#d9d9d9"
              />
            </div>
            <div className="multiImageImage mob">
              <img className="projectCardImageImage" src={this.state.Image1} />
            </div>
            <div className="multiImageCaptionHead">
              {this.state.CaptionHead1}
            </div>
            <div className="multiImageCaption">{this.state.Caption1}</div>
          </div>

          <div className="multiImageContainer">
            <div className="multiImageImage des">
              <ImageZoom
                className="projectCardImageImage"
                src={this.state.Image2}
                zoom={this.zoom}
                color="#d9d9d9"
              />
            </div>
            <div className="multiImageImage mob">
              <img className="projectCardImageImage" src={this.state.Image2} />
            </div>
            <div className="multiImageCaptionHead">
              {this.state.CaptionHead2}
            </div>
            <div className="multiImageCaption">{this.state.Caption1}</div>
          </div>

          <div className="multiImageContainer">
            <div className="multiImageImage des">
              <ImageZoom
                className="projectCardImageImage"
                src={this.state.Image3}
                zoom={this.zoom}
                color="#d9d9d9"
              />
            </div>
            <div className="multiImageImage mob">
              <img className="projectCardImageImage" src={this.state.Image3} />
            </div>
            <div className="multiImageCaptionHead">
              {this.state.CaptionHead1}
            </div>
            <div className="multiImageCaption">{this.state.Caption1}</div>
          </div>

          <div className="multiImageContainer">
            <div className="multiImageImage des">
              <ImageZoom
                className="projectCardImageImage"
                src={this.state.Image4}
                zoom={this.zoom}
                color="#d9d9d9"
              />
            </div>
            <div className="multiImageImage mob">
              <img className="projectCardImageImage" src={this.state.Image4} />
            </div>
            <div className="multiImageCaptionHead">
              {this.state.CaptionHead1}
            </div>
            <div className="multiImageCaption">{this.state.Caption1}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;

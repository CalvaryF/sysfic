import React, { Component } from "react";

class Card extends Component {
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
            <div className="multiImageImage"></div>
            <div className="multiImageCaptionHead">
              {this.state.CaptionHead1}
            </div>
            <div className="multiImageCaption">{this.state.Caption1}</div>
          </div>

          <div className="multiImageContainer">
            <div className="multiImageImage"></div>
            <div className="multiImageCaptionHead">
              {this.state.CaptionHead2}
            </div>
            <div className="multiImageCaption">{this.state.Caption1}</div>
          </div>

          <div className="multiImageContainer">
            <div className="multiImageImage"></div>
            <div className="multiImageCaptionHead">
              {this.state.CaptionHead1}
            </div>
            <div className="multiImageCaption">{this.state.Caption1}</div>
          </div>

          <div className="multiImageContainer">
            <div className="multiImageImage"></div>
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

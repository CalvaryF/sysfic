import React, { Component } from "react";

class Card extends Component {
  state = {
    Title: this.props.title,
    Caption: this.props.caption,
    Subtitle1: this.props.subtitle1,
    Subtitle2: this.props.subtitle2,
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
            <div className="projectCardImage"> </div>
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

import React, { Component } from "react";

class Card extends Component {
  state = {
    Title: this.props.title,
    Item1: this.props.item1,
    Item2: this.props.item2,
    Item3: this.props.item3,
    Color: this.props.color,
    Icon: this.props.icon,
  };
  render() {
    return (
      <div className="stickyShadowWrapper">
        <div className={"projectLong" + this.cardBackColor()}>
          <div className={"dogear" + this.cardHeadColor()}></div>

          <div className={"projectCardHead" + this.cardHeadColor()}>
            <span className="stickyTitle">{this.state.Title}</span>
            <div className={"dot" + this.cardDotColor()}></div>
          </div>

          <div className="longCopyContainer"></div>
        </div>
      </div>
    );
  }

  cardHeadColor() {
    if (this.state.Color == 0) {
      return " stickyRed";
    } else {
      return " stickyGrey";
    }
  }

  cardBackColor() {
    if (this.state.Color == 0) {
      return " stickyRedBack";
    } else {
      return " stickyGreyBack";
    }
  }

  cardDotColor() {
    if (this.state.Color == 0) {
      return " red";
    } else {
      return " cloud";
    }
  }
}

export default Card;

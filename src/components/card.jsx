import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

class Card extends Component {
  state = {
    Type: this.props.type,
    Title: this.props.title,
    Thumbnail: this.props.thumbnail,
    Path: this.props.path,
  };
  render() {
    return (
      <Link to={this.state.Path} className="cardDiv">
        <div className="cardHead">
          <span className="cardTitle">{this.state.Title}</span>
          <div className={this.dotColor()}> </div>
        </div>
        <img className="cardImage" src={this.state.Thumbnail} />
      </Link>
    );
  }

  dotColor() {
    let classes = "dot ";
    if (this.state.Type === 0) {
      classes += "crust";
    } else if (this.state.Type === 1) {
      classes += "mantle";
    } else {
      classes += "core";
    }
    return classes;
  }
}

export default Card;

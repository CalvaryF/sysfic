import React, { Component } from "react";

class Card extends Component {
  state = {
    title: this.props.ProjectTitle,
    copy: this.props.ProjectCopy,
  };
  render() {
    return (
      <div className="projectHead">
        <div className="projectHeadContent">
          <img className="projectLogo" src="/images/chimera_logo2.svg"></img>
          <div className="projectHeadTextContainer">
            <div className="projectHeadTitle"> {this.state.title}</div>
            <div className="projectHeadInfo">
              {" "}
              <div className="projectHeadInfoText">Biology Series</div>{" "}
              <div className="projectHeadInfoDivider"></div>{" "}
              <div className="projectHeadInfoText">2045</div>
              <div className="projectHeadInfoDivider"></div>{" "}
              <div className="infoDot crust"></div>{" "}
            </div>
            <div className="projectHeadText">{this.state.copy}</div>
          </div>
        </div>
        <div className="projectDivider"> </div>
        <div className="projectVerticalText "> fictional system </div>
        <div className="projectVertical">
          {" "}
          <div className="dot cloud"> </div>
        </div>
      </div>
    );
  }
}

export default Card;

import React, { Component } from "react";

class Card extends Component {
  state = {
    title: this.props.ProjectTitle,
  };
  render() {
    return (
      <div className="projectHead">
        <div className="projectHeadContent">
          <img className="projectLogo" src="/images/chimera_logo2.svg"></img>
          <div className="projectHeadTextContainer">
            <div className="projectHeadTitle"> chimera</div>
            <div className="projectHeadText">
              {" "}
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat.{" "}
            </div>
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

import React, { Component } from "react";

class Intro extends Component {
  state = {
    Title: this.props.title,
    Copy: this.props.copy,
    Icon: this.props.icon,
  };

  handleIcon() {
    if (this.state.Icon) {
      return <img src={this.state.Icon} />;
    } else {
      return;
    }
  }
  render() {
    return (
      <div className="flex">
        <div className="pageIntro">
          <div className="introContainer">
            <div className="introTextContainer">
              <div className="introTitle">{this.state.Title}</div>
              <div className="introCopy">{this.state.Copy}</div>
            </div>
            <div className="introIcon">{this.handleIcon()}</div>
          </div>
          <div className="introDivider"></div>
        </div>
      </div>
    );
  }
}

export default Intro;

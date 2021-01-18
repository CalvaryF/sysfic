import React, { Component } from "react";

class Intro extends Component {
  state = {
    Title: this.props.title,
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
              <div className="introCopy">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </div>
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

import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

class Header extends Component {
  state = {
    clicked: false,
  };

  handleClick = () => {
    if (window.innerWidth < 910) {
      this.setState({ clicked: !this.state.clicked });
      if (this.state.clicked === false) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "visible";
      }
    }
  };

  render() {
    return (
      <div className="headerMain">
        <div className="header">
          <Link className="logoContainer" to="/">
            {" "}
            <img className="logo" src="/images/new_logo.svg" alt="logo" />
            <span className="subItem name">SYSTEMS FICTION</span>
          </Link>
          <div className="divider"></div>
          <div className="menuIcon" onClick={this.handleClick}>
            <img
              className="icon"
              src={this.state.clicked ? "/images/x.svg" : "/images/burg.svg"}
            ></img>
          </div>

          <div
            className={this.state.clicked ? "headerMenu active" : "headerMenu"}
          >
            <Link
              onClick={this.handleClick}
              to="/"
              className={
                this.props.location.pathname.includes("/test")
                  ? "menuItem  menuItemSelected"
                  : "menuItem selectable"
              }
            >
              Work
            </Link>
            <Link
              onClick={this.handleClick}
              to="/feed"
              className={
                this.props.location.pathname === "/feed"
                  ? "menuItem  menuItemSelected"
                  : "menuItem selectable"
              }
            >
              Feed
            </Link>
            <Link
              onClick={this.handleClick}
              to="/blog"
              className={
                this.props.location.pathname === "/blog"
                  ? "menuItem  menuItemSelected"
                  : "menuItem selectable"
              }
            >
              Blog
            </Link>
            <Link
              onClick={this.handleClick}
              to="/info"
              className={
                this.props.location.pathname === "/info"
                  ? "menuItem  menuItemSelected"
                  : "menuItem selectable"
              }
            >
              Info
            </Link>
          </div>
        </div>
        {/* 
            <div className ="subHead">
                    <span className ="subItem name">Calvary Fisher</span>
                    <span className = "subItem date">	<b>&#169;</b> 2020</span>   
            </div>*/}
      </div>
    );
  }
}

export default withRouter(Header);

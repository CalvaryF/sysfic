import React, { Component } from "react";
import Cards from "./components/cards";
import Intro from "./components/pageIntro";
import { Link, withRouter } from "react-router-dom";

class Work extends Component {
  state = {
    projects: [
      {
        id: 1,
        type: 0,
        title: "CONTROL",
        path: "/test",
        thumbnail: "/images/1.jpg",
      },
      {
        id: 2,
        type: 1,
        title: "N-ZYME",
        path: "/test",
        thumbnail: "/images/2.jpg",
      },
      {
        id: 3,
        type: 2,
        title: "STARTOPOLIS",
        path: "/test",
        thumbnail: "/images/3.jpg",
      },
      {
        id: 1,
        type: 0,
        title: "PARACASTE",
        path: "/test",
        thumbnail: "/images/4.jpg",
      },
      {
        id: 2,
        type: 1,
        title: "GENERIC PROCESSOR",
        path: "/test",
        thumbnail: "/images/5.jpg",
      },
      {
        id: 2,
        type: 1,
        title: "RETURN 40,000",
        path: "/test",
        thumbnail: "/images/6.jpg",
      },
      {
        id: 2,
        type: 1,
        title: "NOISEBLOOM",
        path: "/test",
        thumbnail: "/images/7.jpg",
      },
      {
        id: 2,
        type: 1,
        title: "CURSOR",
        path: "/test",
        thumbnail: "/images/8.jpg",
      },
    ],
  };
  render() {
    return (
      <>
        <Intro
          icon="/images/intro_icon.svg"
          title="Mapping the material"
          copy="Systems Fiction is a speculative design practice aiming to map transcendence germinating from a realist base. Each project envisions a possible world where emerging technologies are pushed to a limit. This is done with a sense for the systemic, an attention to how things connect, reverberate, collapse, and rebuild."
        />
        <Cards cards={this.state.projects} />
      </>
    );
  }
}

export default Work;

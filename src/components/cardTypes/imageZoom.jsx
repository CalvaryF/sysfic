import React, { Component } from "react";
import mediumZoom from "medium-zoom";

class ImageZoom extends Component {
  zoom = this.props.zoom.clone({
    background: this.props.color,
  });

  attachZoom = (image) => {
    this.zoom.attach(image);
  };

  render() {
    return (
      <img
        class="zoom"
        src={this.props.src}
        alt={this.props.alt}
        ref={this.attachZoom}
      />
    );
  }
}

class App extends Component {
  zoom = mediumZoom({ background: "#000", margin: 100 });

  render() {
    return (
      <ImageZoom src="image.jpg" alt="Image" zoom={this.zoom} color="#BADA55" />
    );
  }
}

export default ImageZoom;

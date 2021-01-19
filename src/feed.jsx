import React, { Component } from "react";
import Post from "./components/post";
import Intro from "./components/pageIntro";

class Feed extends Component {
  state = {
    posts: [
      { id: 1, image: "/images/1.jpg" },
      { id: 2, image: "/images/2.jpg" },
      { id: 3, image: "/images/2.jpg" },
      { id: 4, image: "/images/2.jpg" },
    ],
  };
  render() {
    return (
      <>
        <Intro title="Systems Sketchbook" icon="/images/feed_icon.svg" />
        <div className="flex">
          <div className="feed">
            {this.state.posts.map((post) => (
              <Post
                key={post.id}
                type={post.type}
                title={post.title}
                image={post.image}
              />
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default Feed;

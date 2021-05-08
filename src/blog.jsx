import React, { Component } from "react";
import Post from "./components/post";
import Intro from "./components/pageIntro";

class Feed extends Component {
  state = {
    posts: [],
  };
  render() {
    return (
      <>
        <Intro
          title="Blog Coming Soon"
          icon="/images/blog_icon.svg"
          copy="under construction / under construction / under construction / under construction / under construction / under construction / under construction / under construction / under construction /"
        />
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

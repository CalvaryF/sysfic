import React, { Component } from 'react';


class Post extends Component {
    state = {
        image: this.props.image
    };
    render() { 
       
        return (
            <div className ="post">
            </div>
        );
    }
}
 
export default Post;
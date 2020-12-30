import React, { Component } from 'react';


class Card extends Component {
    state = {
        title: this.props.title,
        caption: this.props.caption,
        subtitle1: this.props.subtitle1,
        subtitle2: this.props.subtitle2
    };
    render() { 
       
        return (
            
            <div className="stickyShadowWrapper"> 
                <div className="projectSticky">
                        <div calssName="stickyDogEar"> larp </div>
                        <div className="projectCardHead lighten"> 
                        <span className="projectStickyTitle">{this.state.title}</span> 
                            <div className="dot cloud"></div>
                        </div>
            </div>
           </div>
        );
    }
}
 
export default Card;
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

            <div className="projectCardDiv noPadding">

                <div className="projectCardHead lighten"> 
                <span className="projectCardTitle lighten">{this.state.title}</span> 
                    <div className="dot cloud"></div>
                </div>

                

                    <div className="projectCardImageBody">
                        <div className="projectCardImage"> </div>
                        <div className="projectCardCaption" > {this.state.caption} </div>
                    </div>
           </div>
        );
    }
}
 
export default Card;
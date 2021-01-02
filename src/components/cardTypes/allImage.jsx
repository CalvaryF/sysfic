import React, { Component } from 'react';


class Card extends Component {
    state = {
        Title: this.props.title,
        Caption: this.props.caption,
        Subtitle1: this.props.subtitle1,
        Subtitle2: this.props.subtitle2
    };
    render() { 
       
        return (

            <div className="projectCardDiv noPadding">

                <div className="projectCardHead lighten"> 
                <span className="projectCardTitle lighten">{this.state.Title}</span> 
                    <div className="dot cloud"></div>
                </div>

                

                    <div className="projectCardImageBody">
                        <div className="projectCardImage"> </div>
                        <div className="projectCardCaption" > {this.state.Caption} </div>
                    </div>
           </div>
        );
    }
}
 
export default Card;
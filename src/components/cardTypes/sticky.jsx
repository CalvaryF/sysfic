import React, { Component } from 'react';


class Card extends Component {
    state = {
        title: this.props.title,
        caption: this.props.copy
        
    };
    render() { 
       
        return (
            
            <div className="stickyShadowWrapper"> 
                <div className="projectSticky">
                        <div className="dogear"> </div>
                        <div className="projectCardHead redden"> 
                        <span className="stickyTitle">{this.state.title}</span> 
                            <div className="dot mantle"></div>
                        </div>

                        <div className="stickyCopy">
                            - This is a test this is a test <br></br><br></br>
                            - This is a test this is a test <br></br><br></br>
                            - This is a test this is a test <br></br><br></br>
                        </div>
            </div>
           </div>
        );
    }
}
 
export default Card;
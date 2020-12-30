import React, { Component } from 'react';


class Card extends Component {
    state = {
        title: this.props.title,
        subtitle1: this.props.subtitle1,
        subtitle2: this.props.subtitle2
    };
    render() { 
       
        return (

            <div className="projectCardDiv grey">


                <div className="projectCardHead"> 
        <span className="projectCardTitle">{this.state.title}</span> 
                    <div className="dot"></div>
                </div>

                <div className ="projectCardBody"> 
                    <div className="projectCardCopy">
                        <div className="projectCardSubtitle"> {this.state.subtitle1} </div>
                        <div className ="projectCardParagraph"> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.  </div>
                    </div>
                    <div className="projectCardCopy">
                        <div className="projectCardSubtitle2"> {this.state.subtitle2} </div>
                        <div className ="projectCardParagraph"> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.  </div>
                    </div>
                </div>
           </div>
        );
    }
}
 
export default Card;
import React, { Component } from 'react';


class Card extends Component {
    state = {
        Title: this.props.title,
        Caption1: this.props.caption1,
        Caption2: this.props.caption2,
        Caption3: this.props.caption3,
        Caption4: this.props.caption4
    };
    render() { 
       
        return (

            <div className="projectCardDiv grey">


                <div className="projectCardHead"> 
                    <span className="projectCardTitle">{this.state.Title}</span> 
                    <div className="dot"></div>
                </div>

                <div className="projectMultiImageBody">
                        <div className="multiImageContainer">
                            <div className="multiImageImage">

                            </div>
                            <div className="multiImageCaption">
                                {this.state.Caption1}
                            </div>
                            
                        </div>
                </div>

                <div className="projectMultiImageBody">
                        <div className="multiImageContainer">
                            <div className="multiImageImage">

                            </div>
                            <div className="multiImageCaption">
                                {this.state.Caption1}
                            </div>
                            
                        </div>
                </div>

                <div className="projectMultiImageBody">
                        <div className="multiImageContainer">
                            <div className="multiImageImage">

                            </div>
                            <div className="multiImageCaption">
                                {this.state.Caption1}
                            </div>
                            
                        </div>
                </div>

                <div className="projectMultiImageBody">
                        <div className="multiImageContainer">
                            <div className="multiImageImage">

                            </div>
                            <div className="multiImageCaption">
                                {this.state.Caption1}
                            </div>
                            
                        </div>
                </div>

               
           </div>
        );
    }
}
 
export default Card;
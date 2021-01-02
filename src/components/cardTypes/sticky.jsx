import React, { Component } from 'react';


class Card extends Component {
    state = {
        Title: this.props.title,
        Item1: this.props.item1,
        Item2: this.props.item2,
        Item3: this.props.item3,
        Color: this.props.color,
        Icon: this.props.icon
        
        
    };
    render() { 
       
        return (
            
            <div className="stickyShadowWrapper"> 
                <div className={"projectSticky"+this.cardBackColor()}>

                    <div className={"dogear" + this.cardHeadColor()} > 
                    </div>

                    <div className={'projectCardHead' + this.cardHeadColor()}> 
                        <span className="stickyTitle">{this.state.Title}</span> 
                        <div className={"dot" + this.cardDotColor()}></div>
                    </div>

                    <div className="stickyCopyContainer"> 
                        <div className="stickyCopy">
                                <img className = "stickyImage" src = {this.state.Icon} />
                                {this.state.Item1} 
                        </div>
                        <div className="stickyCopy">
                                <img className = "stickyImage" src = {this.state.Icon} />
                                {this.state.Item2} 
                        </div>
                        <div className="stickyCopy">
                                <img className = "stickyImage" src = {this.state.Icon} />
                                {this.state.Item3} 
                        </div>
                            
                    </div>
                        
            </div>
           </div>
        );
    }

    cardHeadColor()
    {
        if (this.state.Color == 0)
        {
            return ' stickyBlue';
        }
        else
        {
            return ' stickyGrey';
        }
    }

    cardBackColor()
    {
        if (this.state.Color == 0)
        {
            return ' stickyBlueBack';
        }
        else
        {
            return ' stickyGreyBack';
        } 
    }

    cardDotColor()
    {
        if (this.state.Color == 0)
        {
            return ' mantle';
        }
        else
        {
            return ' cloud';
        } 
    }
}
 
export default Card;
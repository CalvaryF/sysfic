 import React, { Component } from 'react';
 import { Link, withRouter } from 'react-router-dom';


 class Card extends Component {
     state = {
         type: this.props.type,
         title: this.props.title,
         thumbnail: this.props.thumbnail,
         path:this.props.path
     };
     render() { 
        
         return (<Link to={this.state.path} className = "cardDiv">
             
             <div className="cardHead">  
                <span className="cardTitle">{this.state.title}</span> 
                <div className = {this.dotColor()}> </div>
            </div>
            <img className = "cardImage" src = {this.state.thumbnail} />
            
         </Link>);
     }

     dotColor() {
         let classes = "dot ";
         if (this.state.type === 0) {
             classes += "crust";
         }
         else if (this.state.type === 1) {
             classes += "mantle";
         }
         else {
             classes += "core";
         }
         return classes;
     }
 }
  
 export default Card;
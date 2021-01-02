import React, { Component } from 'react';

import { Link, withRouter } from 'react-router-dom';

class Header extends Component {
    render() { 
        return ( 
        <div className = "headerMain">

            <div className="header"> 
            
            <Link className="logoContainer" to="/"> <img className="logo" src="/images/new_logo.svg" alt="logo" />
            <span className ="subItem name">CALVARY FISHER</span>
             </Link>  
             <div className="divider"></div>
            
                <div className="headerMenu menuItem"> 
                    <Link to="/" className ={this.props.location.pathname.includes('/test') ?"menuItem  menuItemSelected":"menuItem selectable"}>Work</Link>
                    <Link to ="/feed" className = {this.props.location.pathname === '/feed'?"menuItem  menuItemSelected":"menuItem selectable"}>Feed</Link>
                    <Link to ="/info" className = {this.props.location.pathname === '/info'?"menuItem  menuItemSelected":"menuItem selectable"}>Info</Link>
                    
                </div>
            </div>
            {/* 
            <div className ="subHead">
                    <span className ="subItem name">Calvary Fisher</span>
                    <span className = "subItem date">	<b>&#169;</b> 2020</span>   
            </div>*/}
        </div> );
    }
}
 
export default withRouter(Header);
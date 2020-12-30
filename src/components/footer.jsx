import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

class Header extends Component {
    render() { 
        return ( 
        <div className = "footerMain">
            <div className ="contact" > For business inquiries: <br></br><Link to="/" className="contactButton">Email me &#8594;</Link> </div>

            <div className ="links"> 
                <Link to ="/" className = "footerLink">Youtube </Link>
                <Link to ="/" className = "footerLink">Instagram </Link>
                <Link to ="/" className = "footerLink">Linkedin </Link>
                <Link to ="/" className = "footerLink">Medium </Link>
                <Link to ="/" className = "footerLink">Twitter </Link>
                <div className="copyright"> &copy; Calvary Fisher 2021 </div>
            </div>
           
            
        </div> );
    }
}
 
export default withRouter(Header);
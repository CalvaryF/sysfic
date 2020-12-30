import React from 'react';
import { Link, withRouter } from 'react-router-dom';


function Info ()
{
    return (
        <div  className ="flex">
            
            <div className ="por">

          
                <div className ="imageCard">
                     <div className="infoHead"> 
                    <span className="cardTitle">@cal</span> 
                 <div className="dot mantle"></div>   
                 </div>
                 <img  className = "infoImage"width ="400px;"src = "/images/info.png" alt ="portrait"/>
                 <div className="infoTextDiv">
                     <span className="infoText"> Calvary Fisher is a speculative designer exploring remote possibilities in system-centered product design. He lives inLos Angeles, California, and enjoys reading, running, and reality.
                     </span>
                 </div>
                </div>

                <div className ="cardOutline">
                     
                     </div>
     
                     <div className ="cardOutline">
                     
                     </div>

               

            </div>
           
            

        </div>
    );
}

export default Info;
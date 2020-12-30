import React, { Component } from 'react';
import ProjectHead from './projectHead';
import AllText from './cardTypes/allText';
import TextImageText from './cardTypes/textImageText';
import AllImage from './cardTypes/allImage';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

class Project extends Component {
    constructor (props)
    {
        super(props);
        this.state = { 
            
        }
    }

    
    
    render() { 
        return ( 
            <div>
            <ProjectHead/>
            <div className="projectContainer"> 
                <div className="testMain"> 
                
                    <TextImageText title={"infrahumanism"} caption={'This is a motherfucking caption, mess around and see. yeah, thats what I thought'} subtitle1={'Tracable Transplants'} subtitle2={'Remember Where You Are'}/>
                    <AllText title ={'soul control'} subtitle1 ={"Extrastatecraft"} subtitle2 = {"The Ikea Effect"} />
                    <AllImage title={"ocular vision"} caption={'This is a motherfucking caption, mess around and see. yeah, thats what I thought'} />
                    <AllImage title={"dragonfly"} caption={'This is a motherfucking caption, mess around and see. yeah, thats what I thought'} />
                    
                </div>
            
            </div>
            </div>
        );
    }

    

    
}
 
export default Project;
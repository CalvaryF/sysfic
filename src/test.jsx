import React from 'react';
import ProjectHead from './components/projectHead';
import AllText from './components/cardTypes/allText';
import TextImageText from './components/cardTypes/textImageText';
import AllImage from './components/cardTypes/allImage';
import Sticky from './components/cardTypes/sticky';


function Info ()
{
    return (
        <div>
            <ProjectHead/>
            <div className="projectContainer flex"> 
                

                <div className="projectLeft"> 
                <Sticky title={'Big Questions'}/>
                <Sticky title={'Tools + Techniques'}/>
                </div>

                <div className="projectRight"> 
                    <TextImageText title={"infrahumanism"} caption={'This is a motherfucking caption, mess around and see. yeah, thats what I thought'} subtitle1={'Tracable Transplants'} subtitle2={'Remember Where You Are'}/>
                    <AllText title ={'soul control'} subtitle1 ={"Extrastatecraft"} subtitle2 = {"The Ikea Effect"} />
                    <AllImage title={"ocular vision"} caption={'This is a motherfucking caption, mess around and see. yeah, thats what I thought'} />
                    <AllImage title={"Bone Minimalism"} caption={'This is a motherfucking caption, mess around and see. yeah, thats what I thought'} />
                    <TextImageText title={"infrahumanism"} caption={'This is a motherfucking caption, mess around and see. yeah, thats what I thought'} subtitle1={'Tracable Transplants'} subtitle2={'Remember Where You Are'}/>
             
                </div>

                
            </div>
            
            
        </div>
    );
}

export default Info;
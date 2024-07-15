import React from "react";
import './index.css'
import { CgPlayButtonO } from "react-icons/cg";

const Podcast = () =>{
    return(
    <div className ="Podcast">
        <div className="podcastTitle">
        <h1 className="podcast-title">Protechs Podcast</h1>
        <p>Welcome to ProTechs podcast where we talk about careers,
        <br></br>
        money, friendships and everything in between. 
        Hosts: Gladwell Wanjiku
               <br></br>
               Jane Kibaara
               <br></br>
               Fridah Wothaya
               <br></br>
               Karen Philip
               <br></br>
               Agnes Wangesha
        </p>
        </div>

        <div className="episodes">
            <div className="mics">
            <figure>
            <div className="play-button"><CgPlayButtonO /></div>
            <img src="/Images/headphones.jpeg" className="mic" alt=""/>
            <figcaption>
                <br></br>
                Welcome to Protechs podcast, where we talk about
                <br></br>
                literally anything. Today let's talk about life.
            </figcaption>
            </figure>
            <figure>
            <div className="play-button2"><CgPlayButtonO /></div>
            <img src="/Images/headphones.jpeg" className="mic" alt=""/>
            <figcaption>         
                <br></br>
                Welcome to Protechs podcast, where we talk about
                <br></br>
                literally anything. Today let's talk about adulting.</figcaption>
            </figure>
            </div>
            <div className="mics">
            <figure>
            <div className="play-button3"><CgPlayButtonO /></div>
            <img src="/Images/headphones.jpeg" className="mic" alt=""/>
            <figcaption>               
                <br></br>
                Welcome to Protechs podcast, where we talk about
                <br></br>
                literally anything. Today let's talk about internships.</figcaption>
            </figure>
            <figure>
            <div className="play-button4"><CgPlayButtonO /></div>
            <img src="/Images/headphones.jpeg" className="mic" alt=""/>
            <figcaption>                
                <br></br>
                Welcome to Protechs podcast, where we talk about
                <br></br>
                literally anything. Today let's talk about getting ready for the workspace.</figcaption>
            </figure>
            </div>
        </div>
        </div>


    )
}
export default Podcast;
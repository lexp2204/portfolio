import React from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import './Hero.css'



export default function Hero(){
    return(
        <div id="home" className="hero">
            <h1><span>Welcome to my Portfolio,</span></h1>
            <div className="hero-action">
                <div className="hero-connect"><AnchorLink className="anchor-link" href="#contact">Connect with Me</AnchorLink></div>
                <div className="hero-resume"> <a className="anchor-link" href="/assets/Alexis_Penn_Resume_edited.pdf" target="_blank" rel="noopener noreferrer">My Resume</a></div>
            </div>
            
        </div>
    )
}
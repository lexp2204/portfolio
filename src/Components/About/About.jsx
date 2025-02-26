import React from "react"
import './About.css'
import theme_pattern from '/assets/theme_pattern.svg'
import coding_icon from '/assets/coding_icon.png'

export default function About(){
    return(
        <div id="about" className="about">
            <div className="about-title">
                <h1>About Me</h1>
                <img src={theme_pattern} alt=""/>
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={coding_icon} />
                </div>
                <div className="about-right"> 
                    <div className="about-para">
                        <p>Hi my name is Alexis Penn and welcome to my portfolio webpage. I am currently a CS student at Kean University with a passion for learning and developing code. I have a good foundation in HTML, CSS, Javascript, Java, and MySQL. I'm currently learning new technologies such as React and Tailwind CSS, along with Express.js for full-stack development.</p>
                        <p>I also have a interest in web/app design using technologies such as Figma.</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"90%"}}/></div>
                        <div className="about-skill"><p>React JS</p><hr style={{width:"50%"}}/></div>
                        <div className="about-skill"><p>Javascript</p><hr style={{width:"60%"}}/></div>
                        <div className="about-skill"><p>Java</p><hr style={{width:"65%"}}/></div>
                    </div>
                </div>
            </div>
            <div className="about-achievements">
                <div className="about-achievement">
                    <h1>1+</h1>
                    <p>YEARS OF EXPERIENCE</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>3+</h1>
                    <p>PROJECTS COMPLETED</p>
                </div>
                
            </div>
        </div>
    )
}
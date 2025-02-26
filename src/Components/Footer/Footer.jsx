import React from "react"
import "./Footer.css"


export default function Footer(){
    return(
        <div className="footer">
            <hr />
            <div className="footer-bottom">
                <p className="footer-botton-left">© 2025 Alexis Penn. All rights</p>
                <div className="footer-bottom-right">
                    <p>Terms of Services</p>
                    <p>Privacy Policy</p>
                    <p>Connect with Me</p>
                </div>
            </div>
        </div>
    )
}
import React from "react"
import './Contact.css'
import theme_pattern from "/assets/theme_pattern.svg"
import mail_icon from "/assets/mail_icon.svg"
import location_icon from "/assets/location_icon.svg"
import call_icon from "/assets/call_icon.svg"
import github_icon from "/assets/github_icon.svg"

export default function Contact(){
    
    
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "a29e8b91-c448-493c-aa11-90d1f0b60aa8");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert(res.message);
        }
      };
    
    
    
    
    
    return(
        <div id="contact" className="contact">
            <div className="contact-title">
                <h1>Get in Touch</h1>
                <img src={theme_pattern} alt=" " />
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's Talk</h1>
                    <p>I'm currently avaliable to work or collaborate on new projects. Feel free to contact me for any questions or job opportunities!</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={mail_icon} alt=" "/> <p>lexp.0405@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                            <img src={call_icon} alt=" "/> <p>XXX-XXX-XXXX</p>
                        </div>
                        <div className="contact-detail">
                            <img src={location_icon} alt=""/> <p>NJ, United States</p>
                        </div>
                        <div className="contact-detail-github">
                            <img src={github_icon} alt=""/> <p className="github"><a href="https://github.com/lexp2204">My GitHub</a></p>
                        </div>
                    </div>
                </div>
                <form onSubmit={onSubmit} className="contact-right">
                    <label htmlFor="">Your Name</label>
                    <input type="text" name="name" placeholder="Enter your name"/>
                    <label htmlFor="">Your Email</label>
                    <input type="email" name="email" placeholder="Enter your email"/>
                    <label htmlFor="">Write your message here</label>
                    <textarea name="message" rows="8" placeholder="Enter your message"></textarea>
                    <button type="submit"className="contact-submit">Submit Now</button>
                </form>
            </div>
        </div>
    )
}
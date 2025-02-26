import React from "react"
import { useRef } from "react";

export default function ChatForm({chatHistory, setChatHistory, generateBotResponse}){
    
    const inputRef= useRef();
    
    const handleFormSubmit =(e)=>{
        e.preventDefault();
        const userMessage= inputRef.current.value.trim();
        if(!userMessage) return;
        inputRef.current.value="";

        //Update chat history with the user's message
        setChatHistory((history) => [...history, {role: "user", text: userMessage}]);

        //Add a "Thinking..." placeholder for the  bot's response
        setTimeout(()=>{
            setChatHistory((history) => [...history, {role: "model", text: "Thinking..."}]);

            //Call the function to generate the bot's response
        generateBotResponse([...chatHistory, {role: "user", text: userMessage}]);
        },600);
        
};

    return(
        <form action="#" className="chat-form" onSubmit={handleFormSubmit}>
            <input ref={inputRef} type="text" placeholder="Message..." className="message-input" required />
            <button><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z"/></svg></button>
        </form>
    )
}
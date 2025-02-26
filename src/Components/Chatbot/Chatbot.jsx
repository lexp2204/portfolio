import React, { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import "./Chatbot.css"
import ChatForm from "../ChatForm/ChatForm";
import ChatMessage from "../ChatMessage";

export default function Chatbot(){

    const [chatHistory, setChatHistory]= useState([]);
    const chatBodyRef= useRef();

    const generateBotResponse= async (history) =>{
        //Helper function to update chat history
       const updateHistory=(text) =>{
        setChatHistory(prev=> [...prev.filter(msg => msg.text !== "Thinking..."),{role: "model", text}])
        }

       history= history.map(({role, text}) =>({role, parts: [{text}]}));
       
        const requestOptions ={
            method: "POST",
            headers:{ "Content-Type": "appplication/json" },
            body: JSON.stringify({contents: history})
        }

        try{
         const response= await fetch(import.meta.env.VITE_API_URL, requestOptions);
         const data= await response.json();
         if(!response.ok) throw new Error(data.error.message || "Something went wrong!");
         
         //Clean and update chat history with bot's response
         const apiResponseText=data.candidates[0].content.parts[0].text.replace(/\*\*(.*?)\*\*/g, "$1").trim();
         updateHistory(apiResponseText);
        }catch (error){
            console.log(error);
        }
    };

    useEffect(()=>{
      chatBodyRef.current.scrollTo({top: chatBodyRef.current.scrollHeight,}) 
    }, [chatHistory]);

    return(
        <div className="container"> 
            <div className="chatbot-popup">
                <div className="chat-header">
                    <div className="header-info">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 1024 1024"><path d="M738.3 287.6H285.7c-59 0-106.8 47.8-106.8 106.8v303.1c0 59 47.8 106.8 106.8 106.8h81.5v111.1c0 .7.8 1.1 1.4.7l166.9-110.6 41.8-.8h117.4l43.6-.4c59 0 106.8-47.8 106.8-106.8V394.5c0-59-47.8-106.9-106.8-106.9zM351.7 448.2c0-29.5 23.9-53.5 53.5-53.5s53.5 23.9 53.5 53.5-23.9 53.5-53.5 53.5-53.5-23.9-53.5-53.5zm157.9 267.1c-67.8 0-123.8-47.5-132.3-109h264.6c-8.6 61.5-64.5 109-132.3 109zm110-213.7c-29.5 0-53.5-23.9-53.5-53.5s23.9-53.5 53.5-53.5 53.5 23.9 53.5 53.5-23.9 53.5-53.5 53.5zM867.2 644.5V453.1h26.5c19.4 0 35.1 15.7 35.1 35.1v121.1c0 19.4-15.7 35.1-35.1 35.1h-26.5zM95.2 609.4V488.2c0-19.4 15.7-35.1 35.1-35.1h26.5v191.3h-26.5c-19.4 0-35.1-15.7-35.1-35.1zM561.5 149.6c0 23.4-15.6 43.3-36.9 49.7v44.9h-30v-44.9c-21.4-6.5-36.9-26.3-36.9-49.7 0-28.6 23.3-51.9 51.9-51.9s51.9 23.3 51.9 51.9z" /></svg>
                    <h2 className="logo-text">Chatbot</h2>
                    </div>
                    <button><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg></button>  
                </div>

                <div ref={chatBodyRef} className="chat-body">
                    <div className="message bot-message">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 1024 1024"><path d="M738.3 287.6H285.7c-59 0-106.8 47.8-106.8 106.8v303.1c0 59 47.8 106.8 106.8 106.8h81.5v111.1c0 .7.8 1.1 1.4.7l166.9-110.6 41.8-.8h117.4l43.6-.4c59 0 106.8-47.8 106.8-106.8V394.5c0-59-47.8-106.9-106.8-106.9zM351.7 448.2c0-29.5 23.9-53.5 53.5-53.5s53.5 23.9 53.5 53.5-23.9 53.5-53.5 53.5-53.5-23.9-53.5-53.5zm157.9 267.1c-67.8 0-123.8-47.5-132.3-109h264.6c-8.6 61.5-64.5 109-132.3 109zm110-213.7c-29.5 0-53.5-23.9-53.5-53.5s23.9-53.5 53.5-53.5 53.5 23.9 53.5 53.5-23.9 53.5-53.5 53.5zM867.2 644.5V453.1h26.5c19.4 0 35.1 15.7 35.1 35.1v121.1c0 19.4-15.7 35.1-35.1 35.1h-26.5zM95.2 609.4V488.2c0-19.4 15.7-35.1 35.1-35.1h26.5v191.3h-26.5c-19.4 0-35.1-15.7-35.1-35.1zM561.5 149.6c0 23.4-15.6 43.3-36.9 49.7v44.9h-30v-44.9c-21.4-6.5-36.9-26.3-36.9-49.7 0-28.6 23.3-51.9 51.9-51.9s51.9 23.3 51.9 51.9z" /></svg>
                    <p className="message-text">
                        Hey there <br/> How can I help you today?
                    </p>
                    </div>

                    {chatHistory.map((chat, index) =>(
                        <ChatMessage key={index} chat={chat} />
                    ))}
                    
                </div>

                <div className="chat-footer">
                    <ChatForm chatHistory={chatHistory} setChatHistory={setChatHistory} generateBotResponse={generateBotResponse} />
                </div>

            </div>
        </div>
    )
}
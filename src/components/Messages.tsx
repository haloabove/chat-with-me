import React, { useRef, useEffect } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { RootState } from "../models";

function Messages() {
    const messagesContainerRef = useRef<HTMLDivElement>(null);
    const msgByMsg = useSelector((state: RootState) => state.conversations);
    console.log(msgByMsg);
  
    const response = msgByMsg.messages.map((item, key) => {
      const clientClassName = item.client === 'Me' ? 'chat-message user' : 'chat-message chatbot';
  
      return (
        <p className={clientClassName} key={key.toString()} > {item.message}</p >
      );
    }).reverse();
  
    useEffect(() => {
      if (messagesContainerRef.current) {
        messagesContainerRef.current.scrollTop = 0;
      }
    }, [response]);
  
    return (
      <div className='row min-vh-60'>
        <main className='messages' >
          <div className="chat-container" ref={messagesContainerRef}>
            {response}
          </div>
        </main >
      </div>
    );
  }
  
  export default Messages;   
  
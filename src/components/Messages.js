import React, { useRef, useEffect } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";

function Messages() {
    const messagesContainerRef = useRef();
    const conversations = useSelector((state) => state.conversation.conversations);
    const response = useSelector(state => state.conversation.conversations).map((item, key) => {
        const clientClassName = item.client === "Me" ? "chat-message user" : "chat-message chatbot";

        return (
            <p className={clientClassName} key={key.toString()} > {item.message}</p >
        )
    }).reverse();

    useEffect(() => {
        messagesContainerRef.current.scrollTop = 0;
    }, [conversations]);

    return (
        <div className='row'>
            <main className='messages' >
                <div className="chat-container" ref={messagesContainerRef}>
                    {response}
                </div>
            </main >
        </div>
    );
}

export default Messages;

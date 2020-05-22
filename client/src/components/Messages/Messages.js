import React from "react";
import './Messages.css';
import  ScrollToBottom from 'react-scroll-to-bottom';

const Messages = ({messages}) =>{

    return(
        <div className={"chat-messages"}>

                <ScrollToBottom className={"messages"}>
                    {
                        messages.map((message,i) =>
                            <div key={i}>
                                <p>{message.text}</p>
                            </div>
                        )
                    }
                </ScrollToBottom>
        </div>
    )
}

export default Messages;
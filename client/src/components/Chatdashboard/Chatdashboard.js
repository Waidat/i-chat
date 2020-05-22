import React, {useEffect, useState} from "react";
import ChatNavBar  from "../NavBar/ChatNavBar";
import Chat from '../Chat/Chat';
import Messages from "../Messages/Messages";
import './Chatdashboard.css';
import io from "socket.io-client";

let socket;

const Chatdashboard = () => {



    const ServerPoint = "localhost:3300";
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);


    useEffect(() => {

        socket = io(ServerPoint);
        setMessages([
            'hello'
        ])

        socket.emit('startJoin', "Welcome from chat..")


    }, [ServerPoint]);


    useEffect(() => {

        socket.on('message', message => {
            setMessages(messages => [ ...messages,message]);
            console.log(message);
        })
        console.log("hello");

    },[]);

    const sendMessage = (event) => {

        event.preventDefault();

        if (message) {
            socket.emit('sendMessage', message, () => setMessage(''))
        }

    }


    return(
        <div className={"chat-dashboard"}>
            <div className={"chat-dashboard-box "}>
                <div className={"chat-row"}>
                    <div className={"chat-col-30"}>
                        <ChatNavBar></ChatNavBar>
                    </div>
                    <div className={"chat-col-70"}>
                        <div className={"message"}>
                            <Messages messages={messages}></Messages>
                        </div>

                        <Chat
                            message={message}
                            setMessage={setMessage}
                            sendMessage={sendMessage}></Chat>
                    </div>
                </div>
            </div>
        </div>
    )

}

export  default  Chatdashboard;
import React from "react";
import './Chat.css';


const Chat = ({message,setMessage,sendMessage}) => {


    return (

        <div className={"i-chat"}>
            <form>
                <input
                    type={"text"}
                    placeholder={"Enter Message"}
                    required
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    onKeyPress={(event => event.key === "Enter" ? sendMessage(event) : null)}/>
                <button type={"submit"} onClick={(event => sendMessage(event))}>Send</button>
            </form>

        </div>

    )
}

export default Chat;

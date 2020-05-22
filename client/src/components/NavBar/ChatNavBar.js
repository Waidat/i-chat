import React from "react";
import './ChatNavBar.css'
import  {Link} from "react-router-dom";


const ChatNavBar = () => {

    return (
        <div className={"chat-navBar"}>
            <nav className="nav flex-column chat-nav">
                <Link className="nav-link chat-color" to="/">home</Link>
                <Link className="nav-link chat-color" to="/">About</Link>
                <Link className="nav-link chat-color" to="/">Hello</Link>

            </nav>
        </div>
    )
}

export  default  ChatNavBar;
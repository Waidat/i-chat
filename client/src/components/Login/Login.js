import React  from "react";
import  './Login.css';
import  {Link} from 'react-router-dom';


const Login = () => {

    return (
           <div className="chat-login">
               <div className="chat-login-box">
                   <form>
                       <h1>Login</h1>
                       <input type="text" placeholder="Enter UserName"  required></input>
                       <input type="password" placeholder={"Enter password"} required></input>

                       <Link to="/chat-dashboard">
                           <button type="submit">Submit</button>
                       </Link>

                   </form>
               </div>
           </div>

    )
}

export  default  Login;
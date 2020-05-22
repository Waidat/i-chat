import React from 'react';
import  Login from './components/Login/Login';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Chatdashboard from "./components/Chatdashboard/Chatdashboard";

function App() {
  return (
      <Router>
        <Route path="/" exact component={Login}></Route>
        <Route path="/chat-dashboard" component={Chatdashboard}></Route>
      </Router>

  );
}

export default App;

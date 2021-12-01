import './App.css';
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import About from "./components/About";
import Alert from "./components/Alert";
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


export default function App() {
    const [mode, setmode] = useState('light')
    const [button, setbutton]= useState("Enable dark mode?")
    const[alert, setalert] = useState(null)

    const showAlert = (message, type)=>{
      setalert({
        msg: message,
        type : type
      })
      setTimeout(() => {
        setalert(null)
      }, 1000);
    }

    const changecolour =()=>{
      if(mode==='light'){
          setmode('dark')
          setbutton('Enable light mode?!')
          document.body.style.backgroundColor = '#500808'
          showAlert("Dark mode has been enabled", "success")
      }
      else{
          setmode('light')
          setbutton('Enable dark mode?!')
          document.body.style.backgroundColor = 'white'
          showAlert("Light mode has been enabled", "success")
        }
    }

  return (
    <>
    <Router>
    <Navbar title="About" mode={mode} button={button} changecolour={changecolour} />
    <Alert alert={alert} />
    <div className="container my-5">
      
    <Switch>
          <Route exact path="/About">
            <About mode={mode} />
          </Route>
          <Route exact path="/">
            <Textform title="Enter your text here in order to capitalize" mode={mode} showAlert= {showAlert} />
          </Route>
    </Switch>
    </div>
    </Router>
    </>
  );
}



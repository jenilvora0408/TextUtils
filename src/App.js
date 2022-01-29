import './App.css';
import {useState} from 'react';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  // State - which represents whether dark mode is enabled or not.
  const [mode, setMode] = useState('light'); 

  // alert is an object 
  const [alert, setAlert] = useState(null);
  
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    // For auto-dismissing alerts
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode has been enabled", "success");
      
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }

  return (
    <>
    <Router>
    <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} />
    <Alert alert = {alert} />
    
    <div className="container my-3">
    <Switch>
      <Route exact path="/about">
        <About />
      </Route>

      <Route exact path="/">
        <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
      </Route>
    </Switch>
    </div>
    </Router>
      
    
    </>
    
  );
}

export default App;

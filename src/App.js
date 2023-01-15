import "./App.css";
import Navbar from './Components/Navbar';
// import About from './Components/About';
import Form from './Components/Form';
import React, { useState } from 'react'


function App() {

  const [mode, setMode]= useState('dark')
  const [modeName, setModeName]= useState('Light')

  const toggleMode=()=>{
    if(mode==="dark"){
      setMode("primary");
      setModeName("Dark Mode")
    }
    else{
      setMode("dark");
      setModeName("Light Mode")
    }
  }

  
  return (   
    <div>
      <Navbar modeName={modeName} mode={mode} toggleMode={toggleMode} title="TasteIT"/>
      {/* <About/> */}
      <div className="container" ><Form heading="Enter Text"/></div>
    </div>
    
  );
}

export default App;

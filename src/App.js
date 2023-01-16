import "./App.css";
import Navbar from './Components/Navbar';
// import About from './Components/About';
import Form from './Components/Form';
import React, { useState } from 'react'


function App() {

  const [mode, setMode]= useState('primary')
  const [background, setBackground]= useState('white')
  const [modeName, setModeName]= useState('Dark Mode')

  const toggleMode=()=>{
    if(mode==="dark"){
      setMode("primary");
      setModeName("Dark Mode");
      setBackground('grey')
      document.body.style.backgroundColor='white';
    }
    else{
      setMode("dark");
      setModeName("Light Mode");
      document.body.style.backgroundColor='#454545';
      setBackground('white')
    }
  }

  
  return (   
    <div>
      <Navbar modeName={modeName} mode={mode} toggleMode={toggleMode} title="TasteIT"/>
      {/* <About/> */}
      <div className="container" ><Form mode={mode} background={background} heading="Enter Text"/></div>
    </div>
    
  );
}

export default App;

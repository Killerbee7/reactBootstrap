
import React, { useState } from 'react'



function BasicExample(props) {
   

    const [text, setText] = useState('');

    const handleClick = () =>{
        let newText= text.toUpperCase()
        
        setText(newText)
    }

    const clearHandle = () => {
        setText("")
    }

    const handleLowClick = () =>{
        let newText= text.toLowerCase()
        
        setText(newText)
    }
    const handleOnChange = (e) =>{
        
        setText(e.target.value)
    }

    
   

  return (
    <>
    <div className='container' style={{color: props.mode==='primary'?'black':'white'}} >
    <div>
    <h1 >{props.heading}</h1>
    <textarea name="text" value={text} style={{backgroundColor: props.background==='grey'?'white':'smokewhite'}}  cols="120" rows="10" onChange={handleOnChange}></textarea>
    </div>
    <button className="btn btn-primary mx-2" onClick={handleClick}>Convert to upperCase.</button>
    <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to upperCase.</button>
    <button className="btn btn-primary mx-2" onClick={clearHandle}>Clear Text</button>
    
    </div>
    <div className="container my-2" style={{color: props.mode==='primary'?'black':'white'}}>
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008*text.split(" ").length} mins to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  );
}

export default BasicExample;
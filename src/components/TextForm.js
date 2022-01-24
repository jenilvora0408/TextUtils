import React, {useState} from 'react';
import PropTypes from "prop-types"

export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase(text);
        setText(newText);
    }

    const handleDownClick = ()=>{
        let downText = text.toLowerCase(text);
        setText(downText);
    }

    const handleClearClick = ()=>{
        let clearText = ("");
        setText(clearText);
    }

    const handleOnChange = (event)=>{
        setText(event.target.value);
    }

    const handleCopy = ()=>{
        let copyText = document.getElementById("myBox");
        copyText.select();
        navigator.clipboard.writeText(copyText.value);
    }

    const handleExtraSpaces = ()=>{
        let extraSpaces = text.split(/[ ]+/);
        setText(extraSpaces.join(" "));
    }

    const [text, setText] = useState("");
    // text = "New text"; // Wrong way to change the state
    // setText = ("New text"); // Correct way to change the state
  return (
<>
  <div className="container" style={{color: props.mode === 'dark'?'white':'black'}}>             
      <h1 >{props.heading} </h1>
    <div className="mb-3">
        <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'?'grey':'white', color: props.mode === 'dark'?'white':'black'}}></textarea>
    </div>

    <button className="btn btn-primary mx-3" onClick={handleUpClick}>Convert to Uppercase</button>
    <button className="btn btn-primary" onClick={handleDownClick}>Convert to Lowercase</button>
    <button className="btn btn-primary mx-3" onClick={handleClearClick}>Clear text</button>
    <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy text</button>
    <button className="btn btn-primary mx-3" onClick={handleExtraSpaces}>Remove Extra Spaces</button>

  </div>

  <div className="container my-3" style={{color: props.mode === 'dark'?'white':'black'}}>
      <h2>Your text summary</h2>
      <p>{text.split(" ").length} words & {text.length} characters</p>
      <p> {0.008 * text.split(" ").length} minutes read.</p>
      <h3>Preview</h3>
      <p><i> {text.length>0?text:"Enter something in the textbox to preview."} </i> </p>
  </div>
  </>
    );
}

TextForm.propTypes = {
    heading: PropTypes.string.isRequired
}

TextForm.defaultProps = {
    heading: "Set your heading here"
}
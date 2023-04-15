import React, { useState } from "react";
import "./Event.css";

function App() {
    const [imgSize, setImgSize] = useState(200);

    const handleImgHover = () => {
        setImgSize(240);
    };

    const handleImgMouseOut = () => {
        setImgSize(200);
    };

    const handleButtonClick = () => {
        console.log("Button is clicked!");
    };

    const handleButtonDoubleClick = () => {
        alert("You have double-clicked the button!");
    };

    const handleInputFocus = () => {
        console.log("Focused on the textbox");
    };

    const handleInputBlur = () => {
        console.log("Out of textbox");
    };

    const handleParagraphCopy = () => {
        alert("Content copied!");
    };

    const handleParagraphCut = () => {
        alert("Content cut!");
    };

    const handleParagraphPaste = () => {
        alert("Content pasted!");
    };

    return (
        <div>
            <img
                src="https://images.pexels.com/photos/5650631/pexels-photo-5650631.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Sample Image"
                className="image"
                style={{ width: imgSize }}
                onMouseOver={handleImgHover}
                onMouseOut={handleImgMouseOut}
            />
            <br />z
            <br />
            <button
                className="button"
                onClick={handleButtonClick}
                onDoubleClick={handleButtonDoubleClick}
            >
                Double Click Me
            </button>
            <br />
            <br />
            <input
                type="text"
                className="input"
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
            />
            <br />
            <br />
            <p
                className="paragraph"
                contentEditable={true}
                onCopy={handleParagraphCopy}
                onCut={handleParagraphCut}
                onPaste={handleParagraphPaste}
            >
                This is a sample paragraph. Try copying, cutting, and pasting text here.
            </p>
        </div>
    );
}

export default App;

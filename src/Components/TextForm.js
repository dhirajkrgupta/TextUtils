import React, { useState } from "react";

export default function TextForm(props) {
  const [Text, setText] = useState("Enter Text here");
  const handleChange = (event) => {
    setText(event.target.value);
  };
  const handleUpClick = () => {
    if (Text.length > 0 && Text !== Text.toUpperCase()) {
      setText(Text.toUpperCase());
      props.showAlert("Converted to upper case", "success");
    }
  };
  const handleLowClick = () => {
    if (Text.length > 0 && Text !== Text.toLowerCase()) {
      setText(Text.toLowerCase());
      props.showAlert("Converted to lower case", "success");
    }
  };
  const handleClearClick = () => {
    if (Text.length > 0) {
      setText("");
      props.showAlert("Text area cleared", "success");
    }
  };
  const handleCopyClick = () => {
    if (Text.length > 0) {
      navigator.clipboard.writeText(Text);
      props.showAlert("Copied to Clipboard", "success");
    }
  };
  const handleRemoveClick = () => {
    let newText = Text.split(/[ ]+/);
    if (Text.length > 0 && newText.join(" ")!==Text) {
      setText(newText.join(" "));
      props.showAlert("Extra whitespaces are removed", "success");
    }
  };
  let words = Text.split(/\s+/);
  for (let i = 0; i < words.length; i++) {
    if (words[i].length === 0) {
      words.splice(i, 1);
    }
  }
  let wordCount = words.length;

  return (
    <div className="container">
      <div
        className={`container text-${
          props.mode === "light" ? "black" : "white"
        }`}
      >
        <h1 className="heading">{props.heading}</h1>
        <div className="mb-3 my-3">
          <textarea
            className={`form-control bg-${
              props.mode === "light" ? "secondary" : "black"
            } text-${props.mode === "light" ? "black" : "white"}`}
            id="myBox"
            rows="10"
            value={Text}
            onChange={handleChange}
          ></textarea>
        </div>
        <button
          className={`btn btn-${
            props.mode === "light" ? "dark" : "secondary"
          } mx-1 my-1`}
          onClick={handleUpClick}
        >
          Convert to UpperCase
        </button>
        <button
          className={`btn btn-${
            props.mode === "light" ? "dark" : "secondary"
          } mx-1 my-1`}
          onClick={handleLowClick}
        >
          Convert to LowerCase
        </button>
        <button
          className={`btn btn-${
            props.mode === "light" ? "dark" : "secondary"
          } mx-1 my-1`}
          onClick={handleClearClick}
        >
          Clear text
        </button>
        <button
          className={`btn btn-${
            props.mode === "light" ? "dark" : "secondary"
          } mx-1 my-1`}
          onClick={handleRemoveClick}
        >
          Remove Extra Spaces
        </button>
        <button
          className={`clipboard text-${
            props.mode === "light" ? "black" : "white"
          } mx-1 my-1`}
          onClick={handleCopyClick}
          href="/"
          title="Copy to Clipboard"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            className={`bi bi-clipboard clip text-${
              props.mode === "light" ? "black" : "white"
            }`}
            viewBox="0 0 16 16"
          >
            <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1z" />
            <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0z" />
          </svg>
        </button>
      </div>

      <div
        className="container my-3"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h2>Your Text Summary</h2>
        <p>
          {" "}
          {wordCount} Words and {Text.split(/\s+/).join("").length} Characters
        </p>
        <p> {0.008 * wordCount} Minutes read</p>
      </div>
    </div>
  );
}

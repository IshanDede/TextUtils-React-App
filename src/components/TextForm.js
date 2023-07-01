import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
  const [text, convertText] = useState("");

  const handleChange = (e) => {
    convertText(e.target.value);
  };

  const handleUpClick = () => {
    const newVal = text.toUpperCase();
    convertText(newVal);
  };
  const handleDownClick = () => {
    const newVal = text.toLowerCase();
    convertText(newVal);
  };

  const clearText = ()=>{
    convertText("");
  }

  const wordRead = () => {
    return text.split(" ").length * 0.008;
  };

  const revWords = () => {
    convertText(text.split("").reverse().join(""));
  };
  return (
    <>
      <div className="container mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          <h1>{props.heading}</h1>
        </label>
        <textarea
          className="form-control"
          data-bs-theme={props.mode}
          id="exampleFormControlTextarea1"
          rows="12"
          placeholder="Enter text here..."
          value={text}
          onChange={handleChange}
        ></textarea>

        <button className="btn btn-primary my-4" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary my-4 mx-4" onClick={handleDownClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary my-4 me-4" onClick={revWords}>
          Reverse
        </button>
        <button className="btn btn-primary my-4" onClick={clearText}>
          Clear Text
        </button>

        <div className="container">
          <h3>Summary</h3>
          <p>
            Total no. of words :{" "}
            {
              text.split(" ").filter((ele) => {
                return ele.length !== 0;
              }).length
            }
          </p>
          <p>Total no. of characters : {text.length}</p>
          <p>Time required to read : {wordRead()} min</p>
        </div>
      </div>
    </>
  );
}

TextForm.propTypes = {
  heading: PropTypes.string.isRequired,
};

import React from "react";

export default function About() {
  return (
    <>
      <div className="container my-4">
        <h4>WORKING</h4>
        <p>
          A text analyser app that accepts input from user as a string and
          performs operations on it such as reverse and capitalise.
        </p>
        <p>
          <strong>Reverse</strong> : This function accepts user input Separates
          each character as a substring and stores it in an array. The array is
          then reversed using the reverse() method and the array elements are
          joined together to form a string using the join() method.
        </p>
        <p>
          <strong>Capitalise</strong> : This function takes user input and
          applies the toUpperCase method to it to convert the string to upper
          case.
        </p>
      </div>
    </>
  );
}

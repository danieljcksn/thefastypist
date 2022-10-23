import React from "react";

export function Results(props) {
  return (
    <div>
      <h1>{props.correctWords} WPM</h1>
      <h1>{props.correctWords} correct words</h1>
      <h2>{props.wrongWords} wrong words</h2>
    </div>
  );
}

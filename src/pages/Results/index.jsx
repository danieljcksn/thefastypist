import React from "react";
import CountUp from "react-countup";

import { WPM } from "./styles";

export function Results(props) {
  return (
    <>
      <p>Your results: </p>
      <WPM>
        {/* <h1>{props.correctWords} WPM</h1>
      <h1>{props.correctWords} correct words</h1>
      <h2>{props.wrongWords} wrong words</h2> */}
        <CountUp
          start={0}
          end={props.correctWords}
          duration={2.75}
          separator=" "
          onStart={() => console.log("Started! 💨")}
          onEnd={() => console.log("Ended! 👏")}
        >
          {({ countUpRef, start }) => <h1 ref={countUpRef} />}
        </CountUp>
        <h1>WPM</h1>
      </WPM>
      <p>Your results: </p>
    </>
  );
}

import React, { useState, useEffect } from "react";

import "../../index.css";

import {
  PageContainer,
  Timer,
  Line,
  Word,
  Input,
  LinesWrapper,
} from "./styles";

import { allWords } from "./inapropriateWay";

const getRndInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

const getNewLine = () => {
  const newLine = [];
  const numberOfWords = getRndInteger(10, 10);

  for (let i = 0; i < numberOfWords; i++) {
    newLine.push(allWords[getRndInteger(0, allWords.length - 1)]);
  }

  return newLine;
};

export function Match() {
  const [line, setLine] = useState(getNewLine);
  const [results, setResults] = useState(getNewLine);
  const [secondaryLine, setSecondaryLine] = useState(getNewLine);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState("");
  const currentTime = "0:37";

  const handleWordChange = (word) => {
    if (word[word.length - 1] === " ") {
      const newResults = [...results];
      newResults[currentWordIndex] = currentWord === line[currentWordIndex];
      setResults(newResults);

      if (currentWordIndex === line.length - 1) {
        let newLine = getNewLine();
        setLine(secondaryLine);
        setSecondaryLine(newLine);
        setCurrentWordIndex(0);
      } else {
        setCurrentWordIndex(currentWordIndex + 1);
      }
      setCurrentWord("");
    } else {
      setCurrentWord(word);
    }
  };

  return (
    <PageContainer>
      <Timer>
        <h1>{currentTime}</h1>
      </Timer>
      <LinesWrapper>
        <Line>
          {line.map((word, index) => (
            <Word
              textColor={() => {
                if (index >= currentWordIndex) {
                  return "white";
                } else {
                  if (results[index]) {
                    return "var(--green)";
                  } else {
                    return "var(--red)";
                  }
                }
              }}
              backgroundColor={() => {
                if (index === currentWordIndex) {
                  let bgColor =
                    line[currentWordIndex].substr(0, currentWord.length) ===
                    currentWord
                      ? "#3D414E"
                      : "var(--red)";

                  return bgColor;
                } else {
                  return "transparent";
                }
              }}
              isCurrent={index === currentWordIndex}
            >
              {word}
            </Word>
          ))}
        </Line>
        <Line>
          {secondaryLine.map((word, index) => (
            <Word textColor="#7A7C81">{word}</Word>
          ))}
        </Line>
      </LinesWrapper>
      <Input
        type="text"
        value={currentWord}
        onChange={(e) => handleWordChange(e.target.value)}
      />
    </PageContainer>
  );
}

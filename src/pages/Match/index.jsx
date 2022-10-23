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

import { Results } from "../Results";

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

  //countdown timer
  const [time, setTime] = useState(60);
  const [timerOn, setTimerOn] = useState(false);

  const [correctWords, setCorrectWords] = useState(0);
  const [incorrectWords, setIncorrectWords] = useState(0);

  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    let interval = null;
    if (timerOn) {
      interval = setInterval(() => {
        setTime((time) => time - 1);
      }, 1000);
    } else if (!timerOn && time !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timerOn, time]);

  useEffect(() => {
    if (time === 0) {
      handleStop();
    }
  }, [time]);

  const handleStart = () => {
    setCorrectWords(0);
    setIncorrectWords(0);

    setTimerOn(true);
  };

  const handleStop = () => {
    setShowResults(true);
    setTimerOn(false);
  };

  const handleReset = () => {
    setTime(60);
    setTimerOn(false);
    setLine(getNewLine);
    setSecondaryLine(getNewLine);
    setResults(getNewLine);
  };

  const handleWordChange = (word) => {
    if (!timerOn) {
      handleStart();
    }
    if (word.includes(" ")) {
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

      if (currentWord === line[currentWordIndex]) {
        setCorrectWords(correctWords + 1);
      } else {
        setIncorrectWords(incorrectWords + 1);
      }
      setCurrentWord("");
    } else {
      setCurrentWord(word);
    }
  };

  return (
    <PageContainer>
      {showResults ? (
        <Results correctWords={correctWords} wrongWords={incorrectWords} />
      ) : (
        <>
          <Timer>
            <h1>{time}</h1>
          </Timer>
          <LinesWrapper>
            <Line>
              {line.map((word, wordIndex) => (
                <Word
                  textColor={() => {
                    if (wordIndex >= currentWordIndex) {
                      return "white";
                    } else {
                      if (results[wordIndex]) {
                        return "var(--green)";
                      } else {
                        return "var(--red)";
                      }
                    }
                  }}
                  backgroundColor={() => {
                    if (wordIndex === currentWordIndex) {
                      return "#3D414E";
                    } else {
                      return "transparent";
                    }
                  }}
                  isCurrent={wordIndex === currentWordIndex}
                >
                  {/* {word} */}
                  {word.split("").map((letter, letterIndex) => {
                    if (
                      letterIndex < currentWord.length &&
                      wordIndex === currentWordIndex
                    ) {
                      if (letter === currentWord[letterIndex]) {
                        return (
                          <span style={{ color: "var(--green)" }}>
                            {letter}
                          </span>
                        );
                      } else {
                        return (
                          <span style={{ color: "var(--red)" }}>{letter}</span>
                        );
                      }
                    } else {
                      return <span>{letter}</span>;
                    }
                  })}
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
        </>
      )}
    </PageContainer>
  );
}

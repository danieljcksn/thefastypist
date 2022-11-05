import React, { useState, useEffect } from "react";

import "../../index.css";

import { PageContainer, Timer, Word, Letter, Paragraph } from "./styles";

import { englishWords, portugueseWords } from "./words";

import { Results } from "../Results";

import { Header } from "./Header";
import { Footer } from "./Footer";

const getRndInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

const getNewLine = () => {
  const newLine = [];
  const numberOfWords = getRndInteger(13, 13);
  let numberOfChars = 0;

  while (numberOfChars < 60) {
    const word = englishWords[getRndInteger(0, englishWords.length - 1)];
    newLine.push(word);
    numberOfChars += word.length;
  }

  return newLine;
};

export function Main() {
  const [primaryLine, setPrimaryLine] = useState(getNewLine);
  const [results, setResults] = useState(getNewLine);
  const [secondaryLines, setSecondaryLines] = useState([
    getNewLine(),
    getNewLine(),
  ]);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState("");

  //countdown timer
  const [time, setTime] = useState(60);
  const [timerOn, setTimerOn] = useState(false);

  const [correctWords, setCorrectWords] = useState(0);
  const [incorrectWords, setIncorrectWords] = useState(0);

  const [showResults, setShowResults] = useState(false);

  const [mode, setMode] = useState("dark");

  const validChars =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789/*-+.!@#$%*()_+{}|:<>?[]^`~áéíóúàèìòùâêîôûãõçÁÉÍÓÚÀÈÌÒÙÂÊÎÔÛÃÕÇ";

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
    setPrimaryLine(getNewLine);
    setSecondaryLines(getNewLine);
    setResults(getNewLine);
  };

  const handleWordChange = (word, wordIndex) => {
    if (!timerOn) {
      handleStart();
    }

    const newResults = [...results];
    newResults[wordIndex] = word === primaryLine[wordIndex];
    setResults(newResults);

    if (wordIndex === primaryLine.length - 1) {
      let newLine = getNewLine();
      let newPrimaryLine = secondaryLines[0];
      let newSecondaryLines = [...secondaryLines];

      newSecondaryLines.shift();
      newSecondaryLines.push(newLine);

      setPrimaryLine((primaryLine) => newPrimaryLine);
      setSecondaryLines((secondaryLines) => newSecondaryLines);
      setCurrentWordIndex(0);
    } else {
      setCurrentWordIndex(wordIndex + 1);
    }

    if (word === primaryLine[wordIndex]) {
      setCorrectWords(correctWords + 1);
    } else {
      setIncorrectWords(incorrectWords + 1);
    }
    setCurrentWord("");
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Backspace") {
        console.log("backspace");
        setCurrentWord((currentWord) => currentWord.slice(0, -1));
      }

      //check if key pressed space
      else if (event.key === " " && currentWord.length > 0) {
        console.log("space [" + currentWord + "]");
        handleWordChange(currentWord, currentWordIndex);
      }

      //check if its a valid char
      else if (validChars.includes(event.key)) {
        console.log("valid char");
        setCurrentWord((currentWord) => currentWord + event.key);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentWord]);

  return (
    <PageContainer>
      {showResults ? (
        <Results correctWords={correctWords} wrongWords={incorrectWords} />
      ) : (
        <>
          <Header />
          <Paragraph>
            <Paragraph>
              {primaryLine.map((word, wordIndex) => {
                return (
                  <Word textColor={"var(--light-gray)"} key={wordIndex}>
                    {word}
                  </Word>
                );
              })}
            </Paragraph>
            <h1>{currentWord || "[Empty]"}</h1>
          </Paragraph>
          <Footer />
        </>
      )}
    </PageContainer>
  );
}

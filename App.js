import React, { useState } from "react";
import "./styles.css";

var dictEmoji = {
  "😭": "Sobbing",
  "🥺": "Pleading Face",
  "💩": "Poop",
  "🤭": "Blushing Face",
  "😍": "Smiling Face with Heart-Shaped Eyes",
  "😨": "Scared Emoji",
  "😕 ": "Confused Emoji",
  "💕": "Two Hearts",
  "😞": "Sad Emoji",
  "🤷": "Shrug Emoji"
};

var listofEmoji = Object.keys(dictEmoji);

export default function App() {
  const [meaning, setemojiMean] = useState("");

  function onChangehandler() {
    var userInput = event.target.value;
    var meaning = dictEmoji[userInput];

    if (meaning === undefined) {
      meaning = "Oops ! Not in our DB";
    }
    setemojiMean(meaning);
  }

  function onClickhandler(emoji) {
    var meaning = dictEmoji[emoji];
    setemojiMean(meaning);
  }

  return (
    <div className="App">
      <h1>Emoji Interpreter</h1>
      <input style={{ padding: "2em" }} onChange={onChangehandler}></input>
      <div>{meaning}</div>
      <div>
        <h2>Quick Emoji List</h2>
      </div>
      {listofEmoji.map(function (emoji) {
        return (
          <span
            style={{ cursor: "pointer", padding: "0.5em" }}
            onClick={() => onClickhandler(emoji)}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}

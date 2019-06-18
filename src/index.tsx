import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { IData } from "./Interfaces/IData";

const data: IData[] = [
  { id: 1, label: "Brush teeth", important: true, done: true },
  { id: 2, label: "Drink coffee", important: false, done: true },
  { id: 3, label: "Play  games", important: true, done: false },
  { id: 4, label: "Clean carpet", important: false, done: false },
  { id: 5, label: "Throw out rubbish", important: false, done: false },
  { id: 6, label: "Go chillin", important: true, done: false }
];

ReactDOM.render(<App toDo={data} />, document.getElementById("root"));

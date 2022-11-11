import React from 'react';
import './style.css';
import { useState } from 'react';

export default function App() {
  const date = new Date();
  let [click, setClick] = useState(0);
  let [dating, setDating] = useState(date.toLocaleTimeString());
  function clicking() {
    setClick(click + 1);
    setDating(date.toLocaleTimeString());
  }
  return (
    <div>
      <h1>Counter:</h1>
      <div>{click}</div>
      <br />
      <div>{dating}</div>
      <br />
      <button onClick={() => clicking()}>Click me</button>
    </div>
  );
}

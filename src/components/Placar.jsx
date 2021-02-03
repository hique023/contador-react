import React, { useState } from "react";

import "./Placar.css";
import instagram from "../../src/assets/instagram.svg";
import github from "../../src/assets/github.svg";

export default function Placar(props) {
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter(counter + 1);
  }

  function cleanCounter() {
    setCounter(counter - counter);
  }

  return (
    <div className="Placar">
      <h1>Contador: {counter}</h1>
      <button onClick={increment}>Incrementar</button>
      <button onClick={cleanCounter}>Limpar</button>
      <hr />
      <a href="https://www.instagram.com/dev_insano/?hl=pt-br" target="blank">
        <img src={instagram} alt="logo do instagram" />
      </a>
      <a href="https://github.com/hique023" target="blank">
        <img src={github} alt="logo do github" />
      </a>
    </div>
  );
}

import React, { useEffect, useState, UseState } from "react";
import "../style.css";

function Game(props) {
  const blank = new Array(5).fill(null);
  const [input, setInput] = useState([]);

  function InsertInput() {
    setInput([...input, "a"]);
  }
  return (
    <div>
      <div className="container">
        {blank.map((letter, index) => (
          <div className="place-holder" key={index}>
            {input[index]}
          </div>
        ))}
      </div>
      <button className="button" onClick={InsertInput}>
        add "a" to the div
      </button>
    </div>
  );
}
export default Game;

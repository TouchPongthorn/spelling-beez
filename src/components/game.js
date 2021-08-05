import React, { createRef, useEffect, useState, UseState } from "react";
import "../style.css";

function Game(props) {
  const blank = new Array(5).fill(null);
  const [input, setInput] = useState([]);
  const ref = createRef();

  useEffect(() => {
    ref.current.focus();
  }, [ref]);

  const onKeyPress = (e) => {
    console.log(e.key);
    setInput([...input, e.key]);
  };

  return (
    <div tabIndex={1} onKeyPress={onKeyPress} ref={ref}>
      <div className="container">
        {blank.map((letter, index) => (
          <div className="place-holder" key={index}>
            {input[index]}
          </div>
        ))}
      </div>
    </div>
  );
}
export default Game;

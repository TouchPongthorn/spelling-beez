import React, { createRef, useEffect, useState, UseState } from "react";
import "../style.css";

const Game = (props) => {
  const blank = new Array(5).fill(null);
  const [track, setTrack] = useState(0);
  const [input, setInput] = useState([]);
  const word = "grass";
  const ref = createRef();

  useEffect(() => {
    ref.current.focus();
  }, [ref]);

  const onKeyPress = (e) => {
    console.log(e.key);
    if (e.key !== [...word][track]) {
      alert("oops!!! wrong letter");
      return;
    }
    setInput([...input, e.key]);
    setTrack(track + 1);
  };

  return (
    <div tabIndex={1} onKeyPress={onKeyPress} ref={ref}>
      <div>
        <div className="letter-container">
          {blank.map((letter, index) => (
            <div className="place-holder" key={index}>
              {input[index]}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Game;

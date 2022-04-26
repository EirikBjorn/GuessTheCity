import { data } from "./../data";
import React, { useState } from "react";

var i = Math.floor(Math.random() * data.length);

export const Game = (props) => {
  const [answer, setAnswer] = useState("");
  const [rand, setRand] = useState(i);

  const getAnswer = (e) => {
    setAnswer(e.target.value);
  };

  const handleSubmit = (e) => {
    if (answer == data[rand].city) {
      alert(answer + " is correct");
      setAnswer("");
      setRand(Math.floor(Math.random() * data.length));
    } else {
      alert(answer + " is not correct");
    }
    e.preventDefault();
  };

  return (
    <div className="Game">
      <div className="cont">
        <img className="image" src={data[rand].image}></img>
      </div>
      <br></br>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            name="answer"
            value={answer}
            onChange={getAnswer}
          />
        </label>
        <input type="submit" value="Guess!" />
      </form>
    </div>
  );
};

export default Game;

import React, { useState, useEffect } from "react";
import { getImgs } from "./../data";

export const Game = (props) => {
  const [answer, setAnswer] = useState("");
  const [rand, setRand] = useState(i);
  const [imgList, setList] = useState([]);

  useEffect(() => {
    getImgs().then((response) => setList(response));
  }, []);

  var i = Math.floor(Math.random() * imgList.length);

  const handleSubmit = async (e) => {
    if (answer.toUpperCase() == imgList[0].city.toUpperCase()) {
      alert(answer + " is correct");
      setAnswer("");
      setRand(Math.floor(Math.random() * imgList.length));
    } else {
      setAnswer("");
      alert(answer + " is not correct");
    }
    e.preventDefault();
  };

  return (
    <div className="Game">
      <div className="cont">
        {imgList.length > 1 && (
          <img className="image" src={imgList[i].url}></img>
        )}
      </div>
      <br></br>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            name="answer"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
          />
        </label>
        <input type="submit" value="Guess!" />
      </form>
    </div>
  );
};

export default Game;

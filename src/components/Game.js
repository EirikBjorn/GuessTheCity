import React, { useState, useEffect } from "react";
import { getCities } from "./../getData";

export const Game = (props) => {
  const [answer, setAnswer] = useState("");
  const [cityList, setList] = useState([]);
  const [curr, setCurr] = useState(0);

  useEffect(() => {
    getCities(props.call).then((response) => setList(response));
  }, []);

  let bucketUrl =
    "https://storage.googleapis.com/guessthecity-95a9b.appspot.com/images/";

  const handleSubmit = (e) => {
    if (answer.toUpperCase() == cityList[curr].Name.toUpperCase()) {
      alert(answer + " is correct");
      setAnswer("");
      setCurr((curr += 1));
    } else {
      alert(answer + " is not correct");
      setAnswer("");
      setCurr((curr += 1));
    }
    e.preventDefault();
  };

  return (
    <div className="Game">
      <div className="cont">
        {cityList.length > 1 && (
          <img
            className="image"
            src={bucketUrl + cityList[curr].rank + ".png"}
          ></img>
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

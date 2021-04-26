import { useEffect, useState } from "react";
import "./App.css";
import CheckRow from "./components/CheckRow";
import Row from "./components/Row";
import { ProgressContext } from "./context/ProgressContext";
import Confetti from "react-confetti";

function App() {
  const [progress, setProgress] = useState({
    currentRow: 1,
    won: false,
    canCheck: false, //Check if all 4 colors have been selected and you can check the row
    hiddenColors: [],
  });

  const compareRows = (cur, hid) => {
    let corPos = 0,
      wrongPos = 0;
    for (let j = 0; j < 4; j++) {
      if (cur[j] === hid[j]) {
        corPos++;
      }
      for (let k = 0; k < 4; k++) {
        if (cur[j] !== hid[j] && cur[j] === hid[k]) {
          wrongPos++;
        }
      }
    }
    if (corPos === 4) {
      handleWin();
    } else if (corPos !== 4 && progress.currentRow > 9) {
      alert("loser");
    }
    return { wrongPos, corPos };
  };

  const handleWin = () => {
    setProgress((prevState) => ({
      ...prevState,
      won: true,
    }));
  };

  useEffect(() => {
    let colors = [
      "gray",
      "red",
      "yellow",
      "blue",
      "green",
      "orange",
      "white",
      "purple",
      "black",
    ];

    let hid = ["white", "white", "white", "white"];
    let remain = colors;
    colors.splice(2, 1);
    for (let j = 0; j < 4; j++) {
      hid[j] = remain[Math.floor(Math.random() * remain.length)];
      remain = remain.filter((color) => color !== hid[j]);
    }
    console.log(hid);
    setProgress((prevState) => ({
      ...prevState,
      hiddenColors: hid,
    }));
  }, []);

  return (
    <div className="app">
      {progress.won && (
        <>
          <Confetti width={window.innerWidth} height={window.innerHeight} />
          <div className="win-modal-wrapper">
            <div className="win-modal">
              <div>
                <h1>Congratulations! You won!</h1>
                <p>
                  It took you {progress.currentRow - 1}{" "}
                  {progress.currentRow - 1 === 1 ? "try" : "tries"}!
                </p>
              </div>
              <button
                className="play-again-btn"
                onClick={() => window.location.reload()}
              >
                Play Again
              </button>
            </div>
          </div>
        </>
      )}
      <h1>Mastermind</h1>
      <ProgressContext.Provider value={{ progress, setProgress }}>
        <Row id={9} compareRows={compareRows} />
        <Row id={8} compareRows={compareRows} />
        <Row id={7} compareRows={compareRows} />
        <Row id={6} compareRows={compareRows} />
        <Row id={5} compareRows={compareRows} />
        <Row id={4} compareRows={compareRows} />
        <Row id={3} compareRows={compareRows} />
        <Row id={2} compareRows={compareRows} />
        <Row id={1} compareRows={compareRows} />

        <CheckRow />
      </ProgressContext.Provider>
    </div>
  );
}

export default App;

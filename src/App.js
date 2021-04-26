import { useState } from "react";
import "./App.css";
import CheckRow from "./components/CheckRow";
import Row from "./components/Row";
import { ProgressContext } from "./context/ProgressContext";
import Confetti from "react-confetti";

function App() {
  const [progress, setProgress] = useState({
    currentRow: 1,
    won: false,
    selectedColorsAmount: 0, //How many colors I have selected on the current row
  });

  const compareRows = (cur, hid) => {
    let corPos = 0,
      wrongPos = 0;
    console.log(cur, hid);
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

  return (
    <div className="app">
      {progress.won && (
        <Confetti width={window.innerWidth} height={window.innerHeight} />
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

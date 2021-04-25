import { useEffect, useState } from "react";
import "./App.css";
import CheckRow from "./components/CheckRow";
import Row from "./components/Row";
import { ProgressContext } from "./context/ProgressContext";

function App() {
  const [progress, setProgress] = useState({
    currentRow: 1,
    won: false,
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
    //console.log(`positions`, wrongPos, " ", corPos);
    return { wrongPos, corPos };
  };

  useEffect(() => {
    if (progress.won) {
      alert("GG EZ");
    }
  }, [progress.won]);

  return (
    <div className="app">
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

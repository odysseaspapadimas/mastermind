import { useState } from "react";
import "./App.css";
import CheckRow from "./components/CheckRow";
import Row from "./components/Row";
import { ProgressContext } from "./context/ProgressContext";

function App() {
  const [progress, setProgress] = useState({
    currentRow: 1,
  });

  return (
    <div className="app">
      <h1>Mastermind</h1>
      <ProgressContext.Provider value={{ progress, setProgress }}>
        <Row id={9} />
        <Row id={8} />
        <Row id={7} />
        <Row id={6} />
        <Row id={5} />
        <Row id={4} />
        <Row id={3} />
        <Row id={2} />
        <Row id={1} />

        <CheckRow />
      </ProgressContext.Provider>
    </div>
  );
}

export default App;

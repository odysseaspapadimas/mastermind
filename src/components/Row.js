import { useContext, useEffect, useState } from "react";
import { ProgressContext } from "../context/ProgressContext";
import Color from "./Color";
import CorrectPosition from "./CorrectPosition";
import WrongPosition from "./WrongPosition";

const Row = ({ id }) => {
  const { progress } = useContext(ProgressContext);

  const [isCurrentRow, setIsCurrentRow] = useState(false); //Is this row the current game row

  const [rowColors, setRowColors] = useState([]);
  const setColor = (color) => {
    let newArray = [...rowColors];
    newArray[color.id - 1] = color.color;
    setRowColors(newArray);
  };

  useEffect(() => {
    if (progress.currentRow === id) {
      setIsCurrentRow(true);
      console.log("currow", id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [progress.currentRow]);

  return (
    <div className="row">
      <WrongPosition />
      <Color id={1} isCurrentRow={isCurrentRow} setColor={setColor} />
      <Color id={2} isCurrentRow={isCurrentRow} setColor={setColor} />
      <Color id={3} isCurrentRow={isCurrentRow} setColor={setColor} />
      <Color id={4} isCurrentRow={isCurrentRow} setColor={setColor} />
      <CorrectPosition />
    </div>
  );
};

export default Row;

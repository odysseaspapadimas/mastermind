import { useContext, useEffect, useState } from "react";
import { ProgressContext } from "../context/ProgressContext";
import Color from "./Color";
import CorrectPosition from "./CorrectPosition";
import WrongPosition from "./WrongPosition";

const Row = ({ id, compareRows }) => {
  const { progress, setProgress } = useContext(ProgressContext);

  const [isCurrentRow, setIsCurrentRow] = useState(false); //Is this row the current game row

  const [positions, setPositions] = useState([0, 0]); //wrongPos, corPos

  const [rowColors, setRowColors] = useState([]);
  const setColor = (color) => {
    let newArray = [...rowColors];
    newArray[color.id - 1] = color.color;
    setRowColors(newArray);
    if (!newArray.includes(undefined) && newArray.length === 4)
      setProgress((prevState) => ({
        ...prevState,
        canCheck: true,
      }));
  };

  useEffect(() => {
    if (progress.currentRow === id) {
      setIsCurrentRow(true);
      setProgress((prevState) => ({
        ...prevState,
        canCheck: false,
      }));
    } else {
      setIsCurrentRow(false);
    }
    if (progress.currentRow - 1 === id) {
      const { wrongPos, corPos } = compareRows(
        rowColors,
        progress.hiddenColors
      );
      let positionsArr = [wrongPos, corPos];
      setPositions(positionsArr);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [progress.currentRow]);

  return (
    <div className="row">
      <WrongPosition amount={positions[0]} />
      <Color id={1} isCurrentRow={isCurrentRow} setColor={setColor} />
      <Color id={2} isCurrentRow={isCurrentRow} setColor={setColor} />
      <Color id={3} isCurrentRow={isCurrentRow} setColor={setColor} />
      <Color id={4} isCurrentRow={isCurrentRow} setColor={setColor} />
      <CorrectPosition amount={positions[1]} />
    </div>
  );
};

export default Row;

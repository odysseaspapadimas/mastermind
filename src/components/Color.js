import { useState } from "react";
import ColorSelector from "./ColorSelector";

const Color = ({ id, isCurrentRow, setColor }) => {
  const [isSelectingColor, setIsSelectingColor] = useState(false);
  const [selectedColor, setSelectedColor] = useState("");

  const handleColorSelector = (option) => {
    setIsSelectingColor(option);
  };

  const colorPick = (color) => {
    setSelectedColor(color);
    setColor({ id, color });
    setIsSelectingColor(false);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {isSelectingColor && isCurrentRow && (
        <ColorSelector
          colorPick={colorPick}
          handleColorSelector={handleColorSelector}
          isSelectingColor={isSelectingColor}
        />
      )}
      <div
        className={`piece ${selectedColor}`}
        onClick={() => {
          handleColorSelector(!isSelectingColor);
        }}
      ></div>
    </div>
  );
};

export default Color;

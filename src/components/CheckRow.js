import { useContext, useState } from "react";
import { ProgressContext } from "../context/ProgressContext";

const CheckRow = () => {
  const { progress, setProgress } = useContext(ProgressContext);
  const [showWarning, setShowWarning] = useState(false);

  return (
    <>
      <button
        className="check-row-btn"
        onClick={() => {
          if (progress.canCheck) {
            setShowWarning(false);
            setProgress((prevState) => ({
              ...prevState,
              currentRow: prevState.currentRow + 1,
            }));
          } else {
            console.log("You need to select all colors");
            setShowWarning(true);
          }
        }}
      >
        Check Row
      </button>
      {showWarning && (
        <p style={{ color: "red" }}>You need to select all colors first.</p>
      )}
    </>
  );
};

export default CheckRow;

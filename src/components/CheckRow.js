import { useContext } from "react";
import { ProgressContext } from "../context/ProgressContext";

const CheckRow = () => {
  const { setProgress } = useContext(ProgressContext);

  return (
    <button
      className="check-row-btn"
      onClick={() =>
        setProgress((prevState) => ({
          ...prevState,
          currentRow: prevState.currentRow + 1,
        }))
      }
    >
      Check Row
    </button>
  );
};

export default CheckRow;

import React from "react";

const WrongPosition = ({ amount, isCurRow }) => {
  return <div className="wrong-pos">{isCurRow ? amount : 0}</div>;
};

export default WrongPosition;

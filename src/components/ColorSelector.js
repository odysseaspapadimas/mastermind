import { useEffect, useRef } from "react";

const ColorSelector = ({ colorPick, handleColorSelector }) => {
  const elem = useRef();

  const handleClick = (e) => {
    if (elem.current.contains(e.target)) {
      return;
    } else {
      handleColorSelector(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
    // eslint-disable-next-line
  }, []);

  const colorSelect = (e) => {
    if (e.target.classList[1]) {
      console.log("clicked color");
      colorPick(e.target.classList[1]);
    }
  };

  return (
      <>
    <div ref={elem} onClick={colorSelect} className="color-selector">
      <div className="color gray"></div>
      <div className="color red"></div>
      <div className="color yellow"></div>
      <div className="color blue"></div>
      <div className="color green"></div>
      <div className="color orange"></div>
      <div className="color white"></div>
      <div className="color purple"></div>
      <div className="color black"></div>
    </div>
    <span className="arrow"></span>
    </>
  );
};

export default ColorSelector;

import { useState } from "react";
import "../styles/style.css";

function Inner({ item }) {
  const [add, setAdd] = useState(false);
  const [num, setNum] = useState(0);
  const [arr, setArr] = useState([]);
  const [hide, setHide] = useState(false);
  const handlePlus = () => {
    setAdd(true);
    setNum(num + 1);
    arr.push(num);
  };
  const handleMinus = (id) => {
    setHide(true);
  };

  return (
    <div className={`inner ${hide ? "hide" : ""}`}>
      <span>-</span>
      {item + 1}
      <button onClick={() => handlePlus()}>+</button>
      <button onClick={() => handleMinus()}>-</button>
      {add ? arr.map((item, i) => <Inner item={item} />) : ""}
    </div>
  );
}

export default Inner;

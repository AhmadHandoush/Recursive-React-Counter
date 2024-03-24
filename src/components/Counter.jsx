import { useState } from "react";
import Inner from "./Inner";

function Counter() {
  const [c, setc] = useState(0);

  const [array, setArray] = useState([]);

  const handlePlus = () => {
    setc(c + 1);
    array.push(c);
  };

  return (
    <div className>
      <span>-</span>1<button onClick={handlePlus}>+</button>
      <button>-</button>
      {array.map((item, i) => (
        <Inner key={i} item={item} i={i} set={setArray} arr={array} />
      ))}
    </div>
  );
}

export default Counter;

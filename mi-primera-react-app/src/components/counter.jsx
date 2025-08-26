import { useState } from "react";
import "./Counter.css";

const Counter = () => {
  const [count, setCount] = useState(0);

return (
    <div className="counter-container">
      <h1 className="counter-title">Contador</h1>
      <p className="counter-value">{count}</p>
      <div className="counter-buttons">
        <button onClick={() => setCount(count > 0 ? count - 1 : 0)}>-</button>
        <button onClick={() => setCount(0)}>Reset</button>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
    </div>
  );
}

export default Counter;

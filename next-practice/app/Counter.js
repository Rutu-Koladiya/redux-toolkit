"use client"

import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount((prev) => prev + 1)}>+ Increment</button>
      <span>{count}</span>
      <button onClick={() => setCount((prev) => prev - 1)}>- Decrement</button>
    </div>
  );
};

export default Counter;

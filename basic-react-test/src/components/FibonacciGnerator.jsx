import { useState } from "react";

const FibonacciGenerator = () => {
  const [sequence, setSequence] = useState([0, 1]); // Start with first two numbers

  const generateNext = () => {
    const nextValue =
      sequence[sequence.length - 1] + sequence[sequence.length - 2];
    setSequence([...sequence, nextValue]);
  };

  return (
    <div>
      <h2>Fibonacci Sequence Generator</h2>

      <div style={{ marginBottom: "10px" }}>{sequence.join(", ")}</div>

      <button onClick={generateNext}>Generate Next</button>
    </div>
  );
};

export default FibonacciGenerator;

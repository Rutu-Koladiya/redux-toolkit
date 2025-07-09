// Challenge 1: Create a custom hook that manages a counter
// Challenge 2: Create a component that implements a task list with filter with all, active and completed. It can be marked with completed and active
// Challenge 3: Create a component that implements a Fibonacci sequence generator
// Challenge 4: Create a component that implements a color mixer
// Challenge 5: Main App component that combines all challenges

import BasicStringTest from "./components/BasicStringTest";
import ColorMixture from "./components/ColorMixture";
import FibonacciGenerator from "./components/FibonacciGnerator";
import MovieTicketBooking from "./components/MovieTicketBooking";
import NestedSumArray from "./components/NestedSumArray";
import SequentialvsParallel from "./components/SequentialvsParallel";
import StringTest from "./components/StringTest";
import Task from "./components/Task";
import useCounter from "./hook/useCounter";

function App() {
  const { count, increment, decrement, reset } = useCounter(6);

  return (
    <>
    {/* <Task /> */}
      {/* <h2>CHALLENGE 1:</h2>
      <h3>Counter: {count}</h3>
      <button onClick={increment}>+ Increment</button>
      <button onClick={decrement}>- Decrement</button>
      <button onClick={reset}>Reset</button>

      <h2>CHALLENGE 2:</h2>
      <Task />

      <h2>CHALLENGE 3:</h2>
      <FibonacciGenerator />

      <h2>CHALLENGE 4:</h2>
      <ColorMixture />

      <h2>ANOTHER CHALLENGE - 1</h2>
      <p>Sequential vs Parallel User Data Fetcher</p>
      <SequentialvsParallel />

      <h2>ANOTHER CHALLENGE - 2</h2>
      <p>Nested Sum of an Arbitrary Depth Array</p>
      <NestedSumArray />

      <h2>BASIC STRING TEST</h2>
      <BasicStringTest />

      <h2>BASIC STRING TEST</h2>
      <StringTest /> */}

      {/* <h2>Movie Ticket Booking System</h2>
      <MovieTicketBooking /> */}
    </>
  );
}

export default App;

// Build a simple movie ticket booking app that allows users to view movies, select seats, and confirm bookings—all while using core React Hooks effectively.

// Functional Requirements
// ------------------------
// Movie List: Show a list of movies (mocked data is fine).

// Select Movie: User can select a movie to book.

// Seat Selection:

// Show seat grid (e.g., 5x5).
// Note: [ Seat Grid - clickable seats with green (available), gray (booked), blue (selected) ]

// Summary:
// -----------
// Selected Seats: A1, A2
// Total Price: $22
// [Book Now]

// Local Persistence: Use localStorage to persist seat selections by movie.

// Must Use These Hooks
// useState: Manage selected movie, seats, UI state
// useEffect: Load/save seat selections from localStorage
// useRef: Focus first available seat or scroll to seat grid
// useMemo: Memoize total cost and selected seat count
// useCallback: Optimize handler functions like handleSeatSelect

import { useState } from "react";
import Grid from "./Grid";

const MovieTicketBooking = () => {
  const [movieList, setMovieList] = useState(
    Array.from({ length: 12 }, (_, i) => ({
      id: i,
      name: `movie ${i + 1}`,
      isOpen: false,
    }))
  );

  const toggleGrid = (id) => {
    setMovieList((prev) =>
      prev.map((movie) =>
        movie.id === id ? { ...movie, isOpen: !movie.isOpen } : movie
      )
    );
  };

  return (
    <div>
      {movieList?.length === 0 ? (
        <p>There's no movies for today!</p>
      ) : (
        <ul>
          {movieList?.map((movie) => (
            <li key={movie.id}>
              {movie.name}{" "}
              <button onClick={() => toggleGrid(movie.id)}>Book Ticket</button>
              {movie.isOpen && <Grid movieId={movie.id} />}
            </li>
          ))}
        </ul>
      )}

      {movieList.isOpen && <Grid />}
    </div>
  );
};

export default MovieTicketBooking;

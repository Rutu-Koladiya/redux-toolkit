import { useState, useRef, useEffect } from "react";
import "../index.css";
import { useCallback } from "react";
import { useMemo } from "react";

const ROWS = ["A", "B", "C", "D", "E"];
const COLS = [1, 2, 3, 4, 5];
const PRICE_PER_SEAT = 11;

const Grid = ({ movieId }) => {
  const seatGridRef = useRef(null);
  const [bookedSeats, setBookedSeats] = useState(() => {
    const saved = localStorage.getItem(`bookedSeats_movie_${movieId}`);
    return saved ? JSON.parse(saved) : [];
  });
  const [selectedSeats, setSelectedSeats] = useState([]);

  useEffect(() => {
    if (seatGridRef?.current) {
      seatGridRef?.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [movieId]);

  useEffect(() => {
    localStorage.setItem(
      `bookedSeats_movie_${movieId}`,
      JSON.stringify(bookedSeats)
    );
  }, [bookedSeats]);

  useEffect(() => {
    setSelectedSeats([]);
  }, [movieId]);

  const handleSeatSelect = useCallback(
    (seat) => {
      if (bookedSeats.includes(seat)) return;
      setSelectedSeats((prev) =>
        prev.includes(seat) ? prev.filter((s) => s !== seat) : [...prev, seat]
      );
    },
    [selectedSeats, bookedSeats]
  );

  const handleBookNow = () => {
    setBookedSeats((prev) => [...prev, ...selectedSeats]);
    setSelectedSeats([]);
    alert("🎟️ Booking Confirmed!");
  };

  const { totalPrice, seatCount } = useMemo(
    () => ({
      seatCount: selectedSeats.length,
      totalPrice: selectedSeats.length * PRICE_PER_SEAT,
    }),
    [selectedSeats]
  );

  const cells = [];

  for (let row of ROWS) {
    for (let col of COLS) {
      const seat = `${row}${col}`;
      const isBooked = bookedSeats.includes(seat);
      const isSelected = selectedSeats.includes(seat);

      const seatClass = isBooked
        ? "bg-gray-400 cursor-not-allowed"
        : isSelected
        ? "bg-blue-600 text-white"
        : "bg-green-400 hover:bg-green-500";

      cells.push(
        <button
          key={seat}
          className={`grid-cell ${seatClass} rounded py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition`}
          disabled={isBooked}
          // aria-pressed={isSelected}
          title={`Seat ${seat}`}
          onClick={() => handleSeatSelect(seat)}
        >
          {seat}
        </button>
      );
    }
  }
  return (
    <>
      <div ref={seatGridRef} className="grid-container">
        {cells}
      </div>

      <div className="flex justify-around items-center">
        <div className="flex space-x-4">
          <p>
            <strong>Selected Seats:</strong>{" "}
            {seatCount > 0 ? selectedSeats.join(", ") : "None"}
          </p>
          <p>
            <strong>Total Price:</strong> ${totalPrice}
          </p>
        </div>
        <button
          disabled={seatCount === 0}
          onClick={handleBookNow}
          className={`p-2 rounded text-white ${
            seatCount === 0
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          Book Now
        </button>
      </div>
    </>
  );
};

export default Grid;

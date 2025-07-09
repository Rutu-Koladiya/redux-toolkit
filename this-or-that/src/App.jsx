import React, { useState } from "react";

const quizData = [
  {
    category: "Food",
    options: ["Pizza 🍕", "Sushi 🍣"],
    traits: ["Fun-loving", "Classy"],
  },
  {
    category: "Hobbies",
    options: ["Reading 📚", "Dancing 💃"],
    traits: ["Deep Thinker", "Energetic"],
  },
  {
    category: "Music",
    options: ["Classical 🎻", "EDM 🎧"],
    traits: ["Calm", "Party-lover"],
  },
  {
    category: "Nature",
    options: ["Beach 🏖️", "Mountains 🏔️"],
    traits: ["Laid-back", "Peaceful Soul"],
  },
];

function App() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState([]);

  const handleChoice = (index) => {
    const chosenTrait = quizData[step].traits[index];
    setAnswers([...answers, chosenTrait]);
    setStep(step + 1);
  };

  const restartGame = () => {
    setStep(0);
    setAnswers([]);
  };

  if (step >= quizData.length) {
    return (
      <div style={styles.container}>
        <h2>Your Personality Summary ✨</h2>
        <ul>
          {answers.map((trait, i) => (
            <li key={i}>🌟 {trait}</li>
          ))}
        </ul>
        <button onClick={restartGame}>Play Again 🔁</button>
      </div>
    );
  }

  const current = quizData[step];

  return (
    <div style={styles.container}>
      <h2>Category: {current.category}</h2>
      <p>Which one do you prefer?</p>
      <div style={styles.optionContainer}>
        {current.options.map((option, i) => (
          <button key={i} onClick={() => handleChoice(i)} style={styles.option}>
            {option}
          </button>
        ))}
      </div>
      <p style={{ marginTop: "10px" }}>
        {step + 1} / {quizData.length}
      </p>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "sans-serif",
    textAlign: "center",
    padding: "30px",
  },
  optionContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginTop: "20px",
  },
  option: {
    fontSize: "20px",
    padding: "10px 20px",
    cursor: "pointer",
    borderRadius: "12px",
    border: "2px solid #333",
    background: "#f0f0f0",
  },
};

export default App;
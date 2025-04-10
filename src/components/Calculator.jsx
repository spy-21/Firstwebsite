import React, { useState } from "react";

function StandardCalculator() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    if (value === "=") {
      try {
        const result = eval(input);
        setInput(result.toString());
      } catch {
        setInput("Error");
      }
    } else if (value === "C") {
      setInput("");
    } else if (value === "⌫") {
      setInput((prev) => prev.slice(0, -1));
    } else {
      setInput((prev) => prev + value);
    }
  };

  const buttons = [
    "7",
    "8",
    "9",
    "/",
    "4",
    "5",
    "6",
    "*",
    "1",
    "2",
    "3",
    "-",
    "0",
    ".",
    "=",
    "+",
    "C",
    "⌫",
  ];

  return (
    <div style={styles.calculator}>
      <div style={styles.display}>{input || "0"}</div>
      <div style={styles.buttons}>
        {buttons.map((btn, idx) => (
          <button
            key={idx}
            onClick={() => handleClick(btn)}
            style={styles.button}
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
}

const styles = {
  calculator: {
    width: 260,
    margin: "40px auto",
    padding: 20,
    border: "2px solid #ccc",
    borderRadius: 10,
  },
  display: {
    marginBottom: 10,
    textAlign: "right",

    padding: "0 10px",
    border: "1px solid #ccc",
    overflowX: "auto",
  },
  buttons: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: 10,
  },
  button: {
    padding: 15,

    border: "1px solid #ccc",
  },
};

export default StandardCalculator;

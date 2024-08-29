import React, { useState } from "react";

function IndexAsKey() {
  const [letters, setLetters] = useState([
    "a",
    "b",
    "c",
    "d",
  ]);

  const removeLetter = (indexToRemove) => {
    setLetters(
      letters.filter(
        (_, index) => index !== indexToRemove
      )
    );
  };

  return (
    <div>
      <ul>
        {letters.map((letter, index) => (
          <li key={index}>
            {index}: {letter}
            <button
              onClick={() => removeLetter(index)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default IndexAsKey;

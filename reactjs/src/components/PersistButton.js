import React from "react";

export default function PersistButton() {
  const handleonClick = (e) => {
    setTimeout(() => {
      console.log(e.target.name);
    }, 100);
  };
  return (
    <div>
      <h1>Persist Button</h1>
      <button
        type="submit"
        name="button"
        onClick={handleonClick}>
        submit
      </button>
    </div>
  );
}

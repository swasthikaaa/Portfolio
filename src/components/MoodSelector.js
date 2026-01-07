import React from "react";

const moods = [
  { label: "Happy", emoji: "😊" },
  { label: "Sad", emoji: "😢" },
  { label: "Excited", emoji: "🤩" },
  { label: "Calm", emoji: "😌" },
  { label: "Angry", emoji: "😠" },
  { label: "Creative", emoji: "🎨" },
];

const MoodSelector = ({ mood, setMood }) => (
  <div style={{ marginBottom: "1.5rem" }}>
    <h2>How are you feeling today?</h2>
    <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
      {moods.map(({ label, emoji }) => (
        <button
          key={label}
          onClick={() => setMood(label)}
          style={{
            padding: "0.75rem 1.2rem",
            fontSize: "1.2rem",
            borderRadius: "2rem",
            border: mood === label ? "2px solid #333" : "1px solid #aaa",
            background: mood === label ? "#ffe082" : "#f5f5f5",
            cursor: "pointer",
          }}
        >
          {emoji} {label}
        </button>
      ))}
    </div>
  </div>
);

export default MoodSelector;
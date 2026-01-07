import React from "react";

const MosaicBoard = ({ mood, colors, notes }) => (
  <div style={{ marginTop: "2rem" }}>
    <h2>Your Mood Mosaic</h2>
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
        gap: "1rem",
        marginTop: "1rem",
        minHeight: "150px",
      }}
    >
      <div
        style={{
          padding: "1.2rem",
          background: "#fffde7",
          borderRadius: "1rem",
          textAlign: "center",
          fontWeight: 600,
          fontSize: "1.2rem",
          boxShadow: "0 2px 8px #eee",
        }}
      >
        Mood: {mood}
      </div>
      {colors.map((color, idx) => (
        <div
          key={idx}
          style={{
            background: color,
            borderRadius: "1rem",
            height: "80px",
            boxShadow: "0 2px 8px #eee",
          }}
          title={color}
        ></div>
      ))}
      {notes.map((note, idx) => (
        <div
          key={idx}
          style={{
            background: "#f5f5f5",
            borderRadius: "1rem",
            padding: "1rem",
            minHeight: "80px",
            fontSize: "1rem",
            whiteSpace: "pre-wrap",
            boxShadow: "0 2px 8px #eee",
          }}
        >
          {note}
        </div>
      ))}
    </div>
  </div>
);

export default MosaicBoard;
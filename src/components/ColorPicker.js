import React, { useState } from "react";

const moodColors = {
  Happy: ["#FFF176", "#FFD54F", "#FF8A65", "#BA68C8"],
  Sad: ["#90A4AE", "#4FC3F7", "#1976D2", "#B0BEC5"],
  Excited: ["#FF5252", "#FFD600", "#00E676", "#536DFE"],
  Calm: ["#AED581", "#80CBC4", "#B3E5FC", "#FFE082"],
  Angry: ["#D32F2F", "#FBC02D", "#F57C00", "#616161"],
  Creative: ["#F06292", "#BA68C8", "#FFD600", "#4DD0E1"],
};

const ColorPicker = ({ mood, onAddColor }) => {
  const [selectedColor, setSelectedColor] = useState("");

  const handlePick = (color) => {
    setSelectedColor(color);
    onAddColor(color);
  };

  return (
    <div style={{ marginBottom: "1.5rem" }}>
      <h3>Pick a color for your mood</h3>
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        {(moodColors[mood] || []).map((color) => (
          <button
            key={color}
            onClick={() => handlePick(color)}
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              border: selectedColor === color ? "3px solid #333" : "1px solid #ccc",
              background: color,
              cursor: "pointer",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ColorPicker;
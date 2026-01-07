import React, { useState } from "react";
import MoodSelector from "../components/MoodSelector";
import ColorPicker from "../components/ColorPicker";
import NotesInput from "../components/NotesInput";
import MosaicBoard from "../components/MosaicBoard";

const MoodMosaic = () => {
  const [mood, setMood] = useState("");
  const [colors, setColors] = useState([]);
  const [notes, setNotes] = useState([]);

  // Add color to the colors array
  const handleAddColor = (color) => {
    setColors([...colors, color]);
  };

  // Add note to the notes array
  const handleAddNote = (note) => {
    setNotes([...notes, note]);
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
      <h1>Mood Mosaic</h1>
      <MoodSelector mood={mood} setMood={setMood} />
      {mood && (
        <>
          <ColorPicker mood={mood} onAddColor={handleAddColor} />
          <NotesInput onAddNote={handleAddNote} />
          <MosaicBoard mood={mood} colors={colors} notes={notes} />
        </>
      )}
    </div>
  );
};

export default MoodMosaic;
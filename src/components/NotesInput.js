import React, { useState } from "react";

const NotesInput = ({ onAddNote }) => {
  const [note, setNote] = useState("");

  const handleAdd = () => {
    if (note.trim()) {
      onAddNote(note);
      setNote("");
    }
  };

  return (
    <div style={{ marginBottom: "1.5rem" }}>
      <h3>Add a note</h3>
      <textarea
        rows={2}
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Write a short note about your mood..."
        style={{ width: "100%", fontSize: "1rem", padding: "0.7rem", borderRadius: "0.5rem" }}
      />
      <br />
      <button
        onClick={handleAdd}
        style={{
          marginTop: "0.5rem",
          background: "#90caf9",
          color: "#222",
          border: "none",
          borderRadius: "1.2rem",
          padding: "0.5rem 1.5rem",
          cursor: "pointer",
          fontWeight: 600,
        }}
      >
        Add Note
      </button>
    </div>
  );
};

export default NotesInput;
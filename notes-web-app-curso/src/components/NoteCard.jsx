import React, { useContext } from "react";
import { NoteContext } from "../context/note.context";

function NoteCard({ note }) {
  const { updateNote } = useContext(NoteContext);
  const handleInput = (e) => {
    const updatedNote = { ...note, title: e.target.value };
    updateNote(updatedNote);
  };
  return (
    <article className="note-card" key={note.id}>
      <input
        type="text"
        className="card-title"
        value={note.title}
        onChange={handleInput}
      />
      <input type="checkbox" value={note.marked} />
    </article>
  );
}

export default NoteCard;

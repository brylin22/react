import React, { useContext } from "react";
import HeaderComponent from "../components/HeaderComponent";
import { NoteContext } from "../context/note.context";
import NoteCard from "../components/NoteCard";
import "./NotePage.css";
function NotePage() {
  const { notes } = useContext(NoteContext);
  const noteCards = notes.map((note) => {
    return (
      <li key={note.id}>
        <NoteCard note={note}></NoteCard>
      </li>
    );
  });

  return (
    <>
      <HeaderComponent></HeaderComponent>
      <section id="notes-page">
        <h1>note Page</h1>
        <ul className="note-list">{noteCards}</ul>
      </section>
    </>
  );
}

export default NotePage;

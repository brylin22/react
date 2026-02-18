import { createContext, useState } from "react";
import NoteCard from "../components/NoteCard";
const NoteContext = createContext();

function NoteProviderWrapper(props) {
  const noteList = [
    {
      id: 1,
      title: "Bien lomito",
      marked: false,
    },
    {
      id: 2,
      title: "Tengo que aprender react",
      marked: false,
    },
    {
      id: 3,
      title: "Tengo que aprender laravel",
      marked: false,
    },
    {
      id: 4,
      title: "Tengo que aprender api y promesas",
      marked: false,
    },
    {
      id: 5,
      title: "Dale al php",
      marked: false,
    },
  ];

  const [notes, setNotes] = useState(noteList);

  const updateNote = (updatedNote) => {
    const updatedNotes = notes.map((note) => {
      if (note.id !== updatedNote.id) return note;
      return updateNote;
    });

    setNotes(updatedNotes);
  };

  return (
    <NoteContext.Provider value={{ notes, setNotes, updateNote }}>
      {props.children}
    </NoteContext.Provider>
  );
}

export { NoteContext, NoteProviderWrapper };

//jshint esversion:6
import React, { useState } from "react";

import Header from "./Header";
import CreateArea from "./CreateArea";
import Note from "./Note";
import Footer from "./Footer";
// import notesDB from "../notes";

function App() {
  // const [notes, setNotes] = useState(notesDB);
  const [notes, setNotes] = useState([]);

  function addNote(inputNote) {
    setNotes((prevItems) => {
      return [...prevItems, inputNote];
    });
  }
  return (
    <div>
      <Header />
      {/* the addNote function passes thru to CreateArea Component by onAdd props */}
      <CreateArea onAdd={addNote} />
      {/* creating notes with map method and a constructor callback */}
      {notes.map((noteItem, index) => (
        <Note key={index} title={noteItem.title} content={noteItem.content} />
      ))}
      <Footer />
    </div>
  );
}
export default App;

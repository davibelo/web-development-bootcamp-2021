//jshint esversion:6
import React from "react";

import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import notes from "../notes";

function App() {
  return (
    <div>
      <Header />
      {/* creating notes with map method and a constructor callback */}
      {notes.map((note) => (
        <Note key={note.key} title={note.title} content={note.content} />
      ))}
      <Footer />
    </div>
  );
}
export default App;

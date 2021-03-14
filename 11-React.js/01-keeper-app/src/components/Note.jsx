//jshint esversion:6
import React from "react";

let noteTitle = "Web Bootcamp Notes";
let noteContent =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua";

function Note() {
  return (
    <div className="note">
      <h1>{noteTitle}</h1>
      <p>{noteContent}</p>
    </div>
  );
}
export default Note;

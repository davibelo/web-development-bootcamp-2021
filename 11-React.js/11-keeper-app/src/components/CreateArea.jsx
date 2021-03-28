import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const [inputNote, setInputNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { value, name } = event.target;
    setInputNote((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  }

  function submitNote(event) {
    // props.onAdd is the function addNote passed thru
    // this component, so is simular to have:
    // addNote(inputNote);
    props.onAdd(inputNote);
    // resetting inputNote
    setInputNote({ title: "", content: "" });
    // preventing <form> to refresh the page
    event.preventDefault();
  }

 

  return (
    <div>
      <form className="create-note">
        <input
          name="title"
          placeholder="Title"
          value={inputNote.title}
          onChange={handleChange}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={inputNote.content}
          onChange={handleChange}
        />
        <Zoom in={true}>
          <Fab aria-label="add" onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;

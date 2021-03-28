import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [inputNote, setInputNote] = useState({
    title: "",
    content: "",
  });

  function expand() {
    setIsExpanded(true);
  }

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
    // resetting clicked status
    setIsExpanded(false);
    // preventing <form> to refresh the page
    event.preventDefault();
    // resetting createArea
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded && (
          <input
            name="title"
            placeholder="Title"
            value={inputNote.title}
            onChange={handleChange}
          />
        )}
        <textarea
          name="content"
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
          value={inputNote.content}
          onChange={handleChange}
          onClick={expand}
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

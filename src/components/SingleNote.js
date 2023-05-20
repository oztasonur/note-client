import "bulma/css/bulma.css";
import "../index.css";
import { useState } from "react";

function SingleNote({ note, back }) {
  const [edit, setEdit] = useState(false);

  const handleClick = () => {
    back(null);
  };

  const handleEdit = () => {
    if(edit) {
        setEdit(false);
    } else {
        setEdit(true);
    }
    
  };

  if (edit) {
    return (
      <div class="section">
        <article class="message is-info ">
          <div class="message-header custom-background">
            <p>{note.title}</p>
            <button
              class="delete dark-blue-background"
              aria-label="delete"
              onClick={handleClick}
            ></button>
          </div>
          <textarea
            class="textarea message-body height"
            placeholder="Info textarea"
          >{note.content}</textarea>
        </article>
        <div class="buttons">
            <button class="button is-info custom-background" onClick={handleEdit}>Cancel</button>
          <button class="button is-info custom-background">Save</button>
        </div>
      </div>
    );
  } else {
    return (
      <div class="section">
        <article class="message is-info ">
          <div class="message-header custom-background">
            <p>{note.title}</p>
            <button
              class="delete dark-blue-background"
              aria-label="delete"
              onClick={handleClick}
            ></button>
          </div>
          <div class="message-body height">{note.content}</div>
        </article>

        <div class="buttons">
          <button class="button is-info custom-background" onClick={handleEdit}>
            Edit
          </button>
          <button class="button is-info custom-background">Delete</button>
          <button class="button is-info custom-background">Save</button>
        </div>
      </div>
    );
  }
}

export default SingleNote;

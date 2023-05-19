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
      <div>
        <article class="message is-info">
          <div class="message-header">
            <p>{note.title}</p>
            <button
              class="delete"
              aria-label="delete"
              onClick={handleClick}
            ></button>
          </div>
          <textarea
            class="textarea is-info"
            placeholder="Info textarea"
          >{note.content}</textarea>
        </article>
        <div class="buttons">
            <button class="button is-info" onClick={handleEdit}>Cancel</button>
          <button class="button is-info">Save</button>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <article class="message is-info">
          <div class="message-header">
            <p>{note.title}</p>
            <button
              class="delete"
              aria-label="delete"
              onClick={handleClick}
            ></button>
          </div>
          <div class="message-body">{note.content}</div>
        </article>

        <div class="buttons">
          <button class="button is-info" onClick={handleEdit}>
            Edit
          </button>
          <button class="button is-info">Delete</button>
          <button class="button is-info">Save</button>
        </div>
      </div>
    );
  }
}

export default SingleNote;

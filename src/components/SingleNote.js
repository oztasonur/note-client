import "bulma/css/bulma.css";
import "../index.css";
import { useState } from "react";
import EditNote from "./EditNote";

function SingleNote({ note, cancelButton }) {
  const [edit, setEdit] = useState(false);

  const handleDelete = () => {
    cancelButton(null);
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
      <EditNote note={note} handleDelete={handleDelete} handleEdit={handleEdit}/>
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
              onClick={handleDelete}
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

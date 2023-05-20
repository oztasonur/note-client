import "bulma/css/bulma.css";
import '../index.css';

function EditNote({ note, handleDelete, handleEdit }) {


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
          <textarea
            class="textarea is-info height"
            placeholder="Info textarea"
          >{note.content}</textarea>
        </article>
        <div class="buttons">
            <button class="button is-info custom-background" onClick={handleEdit}>Cancel</button>
          <button class="button is-info custom-background">Save</button>
        </div>
      </div>
  );
}

export default EditNote;

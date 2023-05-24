import "bulma/css/bulma.css";
import '../index.css';
import { useState } from "react";
import api from "../api/AxiosConfig";

function EditNote({ note, handleDelete, handleEdit }) {
  const [content, setContent] = useState(note.content);


  const handleSubmit = async () => {
    
    try {
      note.content = content;
      const response = await api.put(`/notes/${note.id}`, note);
      console.log("Note updated:", response.data);
      handleEdit()
    } catch (error) {
      console.error("Error updating note:", error);
      console.log(note.content)
      console.log(note.id)
    }
  };

  return (
    <form onSubmit={handleSubmit} class="section">
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
            value={content}
            onChange={(e) => setContent(e.target.value)}
          >{note.content}</textarea>
        </article>
        <div class="buttons">
          <button class="button is-info custom-background" onClick={handleEdit}>Cancel</button>
          <button type="submit" class="button is-info custom-background">Save</button>
        </div>
      </form>
  );
}

export default EditNote;

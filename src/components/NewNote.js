import React, { useState } from "react";
import api from "../api/AxiosConfig";

function NewNote({ showNewNote, fetchData, cancelButton }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleDelete = () => {
    cancelButton(null);
    showNewNote()
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await api.post("/notes", { title, content });
      console.log("New note created:", response.data);
      showNewNote()
      fetchData();

    } catch (error) {
      console.error("Error creating new note:", error);
    }
  };

  return (
    <div class="section">
      <div class="message-header custom-background">
        <p>Title</p>
        <button
              class="delete dark-blue-background"
              aria-label="delete"
              onClick={handleDelete}
            ></button>
      </div>
      <form onSubmit={handleSubmit}>
        <article class="message is-info">
          <div class="field">
            <div class="control">
              <input
                class="input"
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div class="field">
              <div>
                <label class="label message-header custom-background">
                  Content
                </label>
              </div>

              <div class="control">
                <textarea
                  class="textarea"
                  placeholder="Content"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                ></textarea>
              </div>
            </div>
          </div>
        </article>

        <button type="submit" class="button is-info custom-background">
          Save
        </button>
      </form>
    </div>
  );
}

export default NewNote;

import "bulma/css/bulma.css";
import '../index.css';
import NoteCard from "./NoteCard";

function NoteList({ notes, showSelectedNote }) {
  return (
    <div class="container section">
    <div class="columns is-multiline is-centered is-vcentered ">
      {notes.map((note) => (
        <div key={note.id}>
          <div>{note.content.length}</div>
          <NoteCard note={note} back={showSelectedNote} />
        </div>
      ))}
    </div>
  </div>
  );
}

export default NoteList;

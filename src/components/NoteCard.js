import "bulma/css/bulma.css";
import '../index.css';

function NoteCard({ note, back }) {

  const handleClick = () => {
    back(note);
  }


  return (
    <div class="column">
      <div class="card custom-background" onClick={handleClick}>
        <div class="card-image"></div>
        <div class="card-content">
          <div class="media">
            <div class="media-left"></div>
            <div class="media-content">
              <p class="title is-3 has-text-black-bis">{note.title}</p>
            </div>
          </div>
          <div class="has-text-black-bis">{note.content}</div>
        </div>
      </div>
    </div>
  );
}

export default NoteCard;

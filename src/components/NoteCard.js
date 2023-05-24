import "bulma/css/bulma.css";
import '../index.css';

function NoteCard({ note, back }) {

  const handleClick = () => {
    back(note);
  }


  return (
    <div class="column">
      <div class="card custom-background max"  onClick={handleClick}>
        <div class="card-image"></div>
        <div class="card-content">
          <div class="media">
            <div class="media-left"></div>
            <div class="media-content">
            {note.title.length > 70 ? (
            <p class="title is-3 has-text-black-bis">{note.title.substring(0, 70)}...</p>
            ) : (
              <p class="title is-3 has-text-black-bis">{note.title.substring(0, 70)}</p>
            )}
            </div>
          </div>
          {note.content.length > 70 ? (
            <div class="has-text-black-bis">{note.content.substring(0, 70)}...</div>
            ) : (
              <div class="has-text-black-bis">{note.content.substring(0, 70)}</div>
            )}
          
        </div>
      </div>
    </div>
  );
}

export default NoteCard;

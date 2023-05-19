import "bulma/css/bulma.css";
import "../index.css";

function SingleNote({ note, back }) {

  const handleClick = () => {
    back(null);
  };

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
        <button class="button is-info">Save</button>
      </div>
    </div>
  );
}

export default SingleNote;

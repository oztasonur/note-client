import "bulma/css/bulma.css";
import "../index.css";

function Header({ showNewNote }) {

    
  const handleNewNote = () => {
    showNewNote();
  };

  return (
    <div class=" section custom-background text-align">
      <h1 class="title is-1 color-black">My Notes</h1>
      <button class="button is-black" onClick={handleNewNote}>
        Create New Note
      </button>
    </div>
  );
}

export default Header;

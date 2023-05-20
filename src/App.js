import "./index.css";
import "bulma/css/bulma.css";
import React, { useEffect, useState } from "react";
import api from "./api/AxiosConfig";
import SingleNote from "./components/SingleNote";
import Header from "./components/Header";
import NoteList from "./components/NoteList";
import NewNote from "./components/NewNote";

function App() {
  const [data, setData] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);
  const [newNote, setNewNote] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/notes");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const showSelectedNote = (note) => {
    setSelectedNote(note);
  };

  const showNewNote = () => {
    setNewNote(true);
  };

  if (newNote) {
    return(
      <NewNote />
    );
    
  } else if (selectedNote) {
    return (
      <div>
        <SingleNote note={selectedNote} cancelButton={showSelectedNote} />
      </div>
    );
  } else {
    return (
      <div>
        <Header showNewNote={showNewNote}/>
        <NoteList notes={data} showSelectedNote={showSelectedNote} />
      </div>
    );
  }
}

export default App;

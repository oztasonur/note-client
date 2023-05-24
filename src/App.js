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


  const fetchData = async () => {
    try {
      const response = await api.get("/notes");
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const showSelectedNote = (note) => {
    setSelectedNote(note);
  };

  const showNewNote = () => {
    if(newNote) {
      setNewNote(false);
    } else {
      setNewNote(true);
    }
    
  };

  if (newNote) {
    return(
      <NewNote showNewNote={showNewNote} fetchData={fetchData} cancelButton={showSelectedNote}/>
    );
    
  } else if (selectedNote) {
    return (
      <div>
        <SingleNote note={selectedNote} cancelButton={showSelectedNote} fetchData={fetchData}/>
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

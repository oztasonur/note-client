import "./index.css";
import "bulma/css/bulma.css";
import React, { useEffect, useState } from "react";
import api from "./api/AxiosConfig";
import SingleNote from "./components/SingleNote";
import Header from "./components/Header";
import NoteList from "./components/NoteList";

function App() {
  const [data, setData] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);

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

  if (selectedNote) {
    return (
      <div>
        <SingleNote note={selectedNote} cancelButton={showSelectedNote} />
      </div>
    );
  } else {
    return (
      <div>
      <Header />
      <NoteList notes={data} showSelectedNote={showSelectedNote}/>      
      </div>
    );
  }
}

export default App;

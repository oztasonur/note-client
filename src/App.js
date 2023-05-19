import "./index.css";
import "bulma/css/bulma.css";
import React, { useEffect, useState } from "react";
import api from "./api/AxiosConfig";
import NoteCard from "./components/NoteCard";
import SingleNote from "./components/SingleNote";

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
  const showSingleNote = (note) => {
    setSelectedNote(note);
  };


  if(selectedNote) {
    return (
      <div>
      <SingleNote note={selectedNote} back={showSingleNote}/>
      </div>
     
    );
  } else {
    return (
      <div class="container">
        <div class="columns is-multiline is-centered is-vcentered ">
          {data.map((note) => (
            <div key={note.id}>
              <NoteCard note={note} back={showSingleNote} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;

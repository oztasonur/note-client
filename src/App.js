import "./index.css";
import "bulma/css/bulma.css";
import React, { useEffect, useState } from "react";
import api from "./api/AxiosConfig";
import NoteCard from "./components/NoteCard";

function App() {
  const [data, setData] = useState([]);

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

  // Render the data in your component
  return (
    <div class="container">
      <div class="columns is-multiline is-centered is-vcentered ">
        {data.map((note) => (
          <div key={note.id}>
            <NoteCard note={note} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

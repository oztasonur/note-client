import "./index.css";
import React, { useEffect, useState } from 'react';
import api from './api/AxiosConfig'

function App() {


  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('/notes');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // Render the data in your component
  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <p>{item.content}</p>
        </div>
      ))}
    </div>
  );
};  

export default App;
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
    const [message, setMessage] = useState()

    useEffect(() => {
      fetch('/test')
      .then(response => response.json())
      .then(data => setMessage(data.message));
  }, [message]);

  return (
    <div className="App">
      <p>{message}</p>
    </div>
  );
}

export default App;
import React, { useState } from "react";
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState(''); 

  const data = async () => {
    try {
      const res = await fetch('http://localhost:5000/data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          sendData: input 
        })
      });

      if (res.ok) {
        setResponse('Message sent successfully');
      } else {
        setResponse('Error sending message');
      }
    } catch (error) {
      console.error('Fetch error:', error);
      setResponse('Network error');
    }
  };

  const handleButton = () => {
    data();
  };

  return (
    <>
      <label>Send message</label><br />
      <input 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
      />
      <br />
      <button onClick={handleButton}>Send</button>
      <p>{response}</p> 
    </>
  );
}

export default App;

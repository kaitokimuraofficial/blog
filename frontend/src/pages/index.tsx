import React from 'react';
import { useState } from 'react'
import "./App.css"

async function logMovies() {
  const response = await fetch("http://localhost:18000");
  const movies = await response.json();
  console.log(movies);
}

function Home() {
  const [count, setCount] = useState(0)
  logMovies()

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <p className="read-the-docs">
        
      </p>
      
    </>
  )
}

export default Home

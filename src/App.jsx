import { useState } from 'react'
import './App.css'

function App() {


  const timeout = 1000

  const slides = [
    "https://picsum.photos/id/237/200/300",
    "https://picsum.photos/id/238/200/300",
    "https://picsum.photos/id/239/200/300",
    "https://picsum.photos/id/240/200/300",
  ]

  return (
    <>
      <h1>Slideshow</h1>  
      <div className="picture">
        <img src={slides[0]} alt="slide" />
      </div>


      <Controls />
  
    </>
  )
}

export default App

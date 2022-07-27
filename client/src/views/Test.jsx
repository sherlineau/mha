import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Test = () => {
  const [message, setMessage] = useState("Loading...")

  useEffect(()=> {
    axios.get(`http://localhost:8000/api`)
      .then(res => setMessage(res.data.message))
      .catch(err => console.log(err))
  }, [])

  return (
    <div>
      <h1>Message from backend: {message}</h1>
    </div>
  )
}

export default Test
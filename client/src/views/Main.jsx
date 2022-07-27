import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import logo from '../assets/My-Hero-Academia-Logo-500x281.png'

const Main = () => {
  const [characters, setCharacters] = useState(null)

  // load all characters
  useEffect(() => {
    axios.get(`http://localhost:8000/api/people`, { withCredentials: false })
      .then(res => setCharacters(res.data))
  }, [])

  return (
    <div className='container m-5 mx-auto '>
      <div className='d-flex justify-content-between align-items-center'>
        <h1 className='display-5'><img src={logo} style={{ width: "180px" }} alt="My Hero Academia Logo" /> My Hero Academia</h1>
        <Link to='/login' className='btn btn-success btn-md'>Login</Link>
      </div>

      <table className='table table-striped table-borderless' style={{ textAlign: "center" }}>
        <thead className='display-6'>
          <tr>
            <td>Name</td>
            <td>Alias</td>
            <td>Affiliation</td>
          </tr>
        </thead>
        <tbody>
          {characters && characters.map((character, i) => (
            <tr key={i}>
              <Link to={`/people/${character._id}`} style={{ display: "block" }}>{character.name}</Link>
              <td>{character.alias}</td>
              <td>{character.affiliation}</td>
            </tr>
          ))
          }
        </tbody>
      </table>
    </div>

  )
}

export default Main
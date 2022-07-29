import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import logo from '../assets/My-Hero-Academia-Logo-500x281.png'
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const Main = () => {
  const navigate = useNavigate()
  const [characters, setCharacters] = useState(null)
  const [filtered, setFiltered] = useState(null)

  // load all characters
  useEffect(() => {
    axios.get(`http://localhost:8000/api/people`, { withCredentials: false })
      .then(res => {
        setCharacters(res.data)
        setFiltered(res.data)
      })
  }, [])

  const updateList = (filter) => {
    if (filter === "All") {
      setFiltered(characters)
    } else if( filter === "Hero" || filter === "Villian" ) {
      const filteredList = characters.filter((character) => character.affiliation.includes(filter))
      setFiltered(filteredList)
    } else {
      const filteredList = characters.filter((character) => character.alias.toLowerCase().includes(filter.toLowerCase()))
      setFiltered(filteredList)
    }
  }

  return (
    <Container className='m-5 mx-auto '>
      <Container className='d-flex justify-content-between align-items-center'>
        <h1 className='display-5'><img src={logo} style={{ width: "180px" }} alt="My Hero Academia Logo" /> My Hero Academia</h1>
        <Button onClick={e => navigate('/login')}>Admin Login</Button>
      </Container>

      {/* TODO add functionality for search feature  */}
      <InputGroup className="mb-3 mx-auto" style={{ width: "750px" }}>
        <InputGroup.Text >Search By Alias</InputGroup.Text>
        <Form.Control placeholder='Search' onChange={e => { updateList(e.target.value) }}/>
        <InputGroup.Text>Filter By</InputGroup.Text>
        <Form.Select size='sm' onChange={e => { updateList(e.target.value) }}>
          <option value="All" >All</option>
          <option value="Hero">Heroes</option>
          <option value="Villian">Villians</option>
        </Form.Select>
      </InputGroup>

      <Table striped borderless size="lg" style={{ textAlign: "center" }}>
        <thead className='display-6'>
          <tr>
            <td>Real Name</td>
            <td>Hero/Villian Name</td>
            <td>Affiliation</td>
          </tr>
        </thead>
        <tbody>
          {/* maps character list by alpha order */}
          {
            characters && filtered && filtered.sort((a, b) => (a.name > b.name ? 1 : -1)).map((character, i) => (
              <tr key={i}>
                <td>{character.name}</td>
                <Link to={`/people/${character._id}`} style={{ display: "block" }}>{character.alias}</Link>
                <td>{character.affiliation}</td>
              </tr>
            ))
          }
        </tbody>
      </Table>
    </Container>

  )
}

export default Main
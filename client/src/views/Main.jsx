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

  // load all characters
  useEffect(() => {
    axios.get(`http://localhost:8000/api/people`, { withCredentials: false })
      .then(res => setCharacters(res.data))
  }, [])

  return (
    <Container className='m-5 mx-auto '>
      <Container className='d-flex justify-content-between align-items-center'>
        <h1 className='display-5'><img src={logo} style={{ width: "180px" }} alt="My Hero Academia Logo" /> My Hero Academia</h1>
        <Button onClick={e => navigate('/login')}>Admin Login</Button>
      </Container>

      {/* TODO add functionality for search/filter Feature */}
      <InputGroup className="mb-3 mx-auto" style={{width: "500px"}}> 
        <Form.Control placeholder='Search'
        />
        <Form.Select size='sm'>
          <option hidden>Filter By</option>
          <option>Heroes</option>
          <option>Villians</option>
        </Form.Select>
      </InputGroup>

      <Table striped borderless size="sm" style={{ textAlign: "center" }}>
        <thead className='display-6'>
          <tr>
            <td>Name</td>
            <td>Alias</td>
            <td>Affiliation</td>
          </tr>
        </thead>
        <tbody>
          {/* maps character list by alpha order */}
          {characters && characters.sort((a, b) => (a.name > b.name ? 1 : -1)).map((character, i) => (
            <tr key={i}>
              <Link to={`/people/${character._id}`} style={{ display: "block" }}>{character.name}</Link>
              <td>{character.alias}</td>
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
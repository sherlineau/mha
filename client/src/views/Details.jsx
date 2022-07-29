import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import logo from '../assets/My-Hero-Academia-Logo-500x281.png'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

const Details = () => {
  const [character, setCharacter] = useState()
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    axios.get(`http://localhost:8000/api/people/${id}`)
      .then(res => setCharacter(res.data))
      .catch(err => console.log(err))
  })
  return (
    <Container className='m-5 mx-auto '>
      <Container className='d-flex justify-content-between align-items-center'>
        <h1 className='display-5'><img src={logo} style={{ width: "180px" }} alt="My Hero Academia Logo" /> My Hero Academia</h1>
        <Button onClick={e => navigate('/')}>Home</Button>
      </Container>
      {
        character ?
          <>
            <Row>
              <h1 className='text-center m-3'>{character.name}</h1>
            </Row>
            <Row>
              <Col>
                <img src={character.image} alt={character.name} style={{ objectFit: "cover", width: "700px" }} />
                <p className='p-3' style={{ textAlign: "justify" }}>{character.description}</p>
              </Col>
              <Col className='p-3'>
                <Table striped borderless>
                  <tbody>
                    <tr>
                      <td style={{ width: "150px" }}>{character.affiliation === "Hero" ? "Hero Name" : "Villian Name"}</td>
                      <td>{character.alias}</td>
                    </tr>
                    <tr>
                      <td>Affiliation</td>
                      <td>{character.affiliation}</td>
                    </tr>
                    <tr>
                      <td>Quirk</td>
                      <td>{character.quirkName}</td>
                    </tr>
                    <tr>
                      <td>Quirk Description</td>
                      <td>{character.quirkDescription}</td>
                    </tr>
                    <tr>
                      <td>Birthday</td>
                      <td>{character.birthday}</td>
                    </tr>
                    <tr>
                      <td>Height:</td>
                      <td>{character.height} cm</td>
                    </tr>
                    <tr>
                      <td>Bloodtype:</td>
                      <td>{character.bloodtype}</td>
                    </tr>
                    {
                      character.affiliation === "Hero" ?
                        <tr>
                          <td>Birthplace</td>
                          <td>{character.birthplace}</td>
                        </tr>
                        : <></>
                    }
                    <tr>
                      <td>Personality</td>
                      <td>{character.personality}</td>
                    </tr>
                    {
                      character.affiliation === "Hero" ?
                        <tr>
                          <td>Ultimate Move</td>
                          <td>{character.ultimateMoves}</td>
                        </tr> : <></>
                    }
                  </tbody>

                </Table>
              </Col>
            </Row>
          </> :
          <h1 className="text-center">Character not found</h1>
      }
    </Container>
  )
}

export default Details
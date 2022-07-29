import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import CharacterForm from "../../components/CharacterForm";
import logo from '../../assets/My-Hero-Academia-Logo-500x281.png'
import Container from 'react-bootstrap/Container'

const UpdatePage = (props) => {
  const navigate = useNavigate()
  const { id } = useParams()
  const [character, setCharacter] = useState() 

  // get a character on load using id from params
  useEffect(() => {
    axios.get(`http://localhost:8000/api/people/${id}`, { withCredentials: true })
      .then(res => setCharacter(res.data))
      .catch(err => navigate('/error'))
  })

  // function to send put/update request to backend
  const updateCharacter = (character) => {
    axios.put(`http://localhost:8000/api/people/${id}`, character, { withCredentials: true })
      .then(res => navigate('/admin/dashboard'))
  }

  return (
    <Container className='m-5 mx-auto'>
      <Container className='d-flex justify-content-between align-items-center'>
        <h1 className='display-5'><img src={logo} style={{ width: "180px" }} alt="My Hero Academia Logo" /> My Hero Academia</h1>
      </Container>
      <Container>
        <h1 className="text-center">Edit</h1>
        {
          character ?
            (<CharacterForm onSubmitProp={updateCharacter} initialName={character.name} initialAlias={character.alias} initialAffiliation={character.affiliation} initialQuirkName={character.quirkName} initialQuirkDescription={character.quirkDescription} initialBirthday={character.birthday} initialHeight={character.height} initialBloodtype={character.bloodtype} initialBirthplace={character.birthplace} initialPersonality={character.personality} initialUltimateMoves={character.ultimateMoves} initialImage={character.image} initialDescription={character.description} />) : ""
        }
      </Container>
    </Container>
  )
}

export default UpdatePage
import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import CharacterForm from '../../components/CharacterForm'
import logo from '../../assets/My-Hero-Academia-Logo-500x281.png'
import Container from 'react-bootstrap/Container'


const CreatePage = () => {
  const navigate = useNavigate()

  const createCharacter = (character) => {
    axios.post(`http://localhost:8000/api/people`, character, { withCredentials: true })
      .then((res => navigate('/admin/dashboard')))
  }

  return (
    <Container className='m-5 mx-auto'>
      <Container className='d-flex justify-content-between align-items-center'>
        <h1 className='display-5'><img src={logo} style={{ width: "180px" }} alt="My Hero Academia Logo" /> My Hero Academia</h1>
      </Container>
      <h1 className='text-center'>Add character to database</h1>
      <CharacterForm onSubmitProp={createCharacter} initialName="" initialAlias="" initialAffiliation=""
        initialQuirkName="" initialQuirkDescription="" initialBirthday=""
        initialHeight="" initialBloodtype="" initialBirthplace=""
        initialPersonality="" initialUltimateMoves="" initialImage=""
        initialDescription="" />
    </Container>
  )
}

export default CreatePage
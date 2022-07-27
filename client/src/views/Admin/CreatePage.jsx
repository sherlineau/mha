import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate, Link, Navigate } from 'react-router-dom'
import CharacterForm from '../../components/CharacterForm'

const CreatePage = () => {
  const navigate = useNavigate()

  const createCharacter = (character) => {
    axios.post(`http://localhost:8000/api/people`, character, { withCredentials: true })
      .then((res => navigate('/admin/dashboard')))
  }

  return (
    <div>
      <h1>Add character to database</h1>
      <CharacterForm onSubmitProp={createCharacter} initialName="" initialAlias="" initialAffiliation=""
        initialQuirkName="" initialQuirkDescription="" initialBirthday=""
        initialHeight="" initialBloodtype="" initialBirthplace=""
        initialPersonality="" initialUltimateMoves="" initialImage=""
        initialDescription="" />
    </div>
  )
}

export default CreatePage
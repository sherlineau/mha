import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate, Link } from "react-router-dom";
import CharacterForm from "../../components/CharacterForm";

const UpdatePage = (props) => {
  const navigate = useNavigate()
  const { id } = useParams()
  const [character, setCharacter] = useState()
  const [loaded, setLoaded] = useState(false);

  // get a character on load using id from params
  useEffect(() => {
    axios.get(`http://localhost:8000/api/people/${id}`,{ withCredentials: true })
      .then(res => {
        setCharacter(res.data)
        setLoaded(true)
      })
      .catch(err => navigate('/error'))
  })

  // function to send put/update request to backend
  const updateCharacter = (character) => {
    axios.put(`http://localhost:8000/api/people/${id}`, character, { withCredentials: true })
      .then(res => navigate('/admin/dashboard'))
  }

  return (
    <div>
      <h1>Edit</h1>
      {
        character?
        (<CharacterForm onSubmitProp={updateCharacter} initialName={character.name} initialAlias={character.alias} initialAffiliation={character.affiliation} initialQuirkName={character.quirkName} initialQuirkDescription={character.quirkDescription} initialBirthday={character.birthday} initialHeight={character.height} initialBloodtype={character.bloodtype} initialBirthplace={character.birthplace} initialPersonality={character.personality} initialUltimateMoves={character.ultimateMoves} initialImage={character.image} initialDescription={character.description} />):""
      }
    </div>
  )
}

export default UpdatePage
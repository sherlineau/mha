import React, { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Details = () => {
    const [character, setCharacter] = useState()
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/people/${id}`)
            .then(res => setCharacter(res.data))
            .catch(err => navigate('/error'))
    })
    return (
        <div>
            {
                character ?
                    <div>
                        <Link to='/'>Home</Link>
                        <p>{character.name}</p>
                        <p>{character.alias}</p>
                        <p>{character.affiliation}</p>
                        <p>{character.quirkName}</p>
                        <p>{character.quirkDescription}</p>
                        <p>{character.birthday}</p>
                        <p>{character.height}</p>
                        <p>{character.bloodtype}</p>
                        <p>{character.birthplace}</p>
                        <p>{character.personality}</p>
                        <p>{character.ultimateMoves}</p>
                        <img src={character.image} alt={character.name} style={{width:"500px"}}/>
                        <p>{character.description}</p>
                    </div>:
                    ""
            }


        </div>
    )
}

export default Details
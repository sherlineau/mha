import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const CharacterForm = (props) => {
  const navigate = useNavigate()
  const { initialName, initialAlias, initialAffiliation,
    initialQuirkName, initialQuirkDescription, initialBirthday,
    initialHeight, initialBloodtype, initialBirthplace,
    initialPersonality, initialUltimateMoves, initialImage,
    initialDescription, onSubmitProp } = props

  const [name, setName] = useState(initialName)
  const [alias, setAlias] = useState(initialAlias)
  const [affiliation, setAffiliation] = useState(initialAffiliation)
  const [quirkName, setQuirkName] = useState(initialQuirkName)
  const [quirkDescription, setQuirkDescription] = useState(initialQuirkDescription)
  const [birthday, setBirthday] = useState(initialBirthday)
  const [height, setHeight] = useState(initialHeight)
  const [bloodtype, setBloodtype] = useState(initialBloodtype)
  const [birthplace, setBirthplace] = useState(initialBirthplace)
  const [personality, setPersonality] = useState(initialPersonality)
  const [ultimateMoves, setUltimateMoves] = useState(initialUltimateMoves)
  const [image, setImage] = useState(initialImage)
  const [description, setDescription] = useState(initialDescription)

  const handleSubmit = e => {
    e.preventDefault()
    onSubmitProp({ name, alias, affiliation, quirkName, quirkDescription, birthday, height, bloodtype, birthplace, personality, ultimateMoves, image, description })
    setName(initialName)
    setAlias(initialAlias)
    setAffiliation(initialAffiliation)
    setQuirkName(initialQuirkName)
    setQuirkDescription(initialQuirkDescription)
    setBirthday(initialBirthday)
    setHeight(initialHeight)
    setBloodtype(initialBloodtype)
    setBirthplace(initialBirthplace)
    setPersonality(initialPersonality)
    setUltimateMoves(initialUltimateMoves)
    setImage(initialImage)
    setDescription(initialDescription)
  }
  return (
    <div className='container m-3'>
      <form onSubmit={handleSubmit}>
        <div className='row'>
          <div className='col'>
            <>
              <label htmlFor="name" className='form-label'>Name</label>
              <input type="text" name="name" value={name} onChange={e => setName(e.target.value)} className='form-control' />
            </>

            <>
              <label htmlFor="alias" className='form-label'>Alias</label>
              <input type="text" name="alias" value={alias} onChange={e => setAlias(e.target.value)} className='form-control' />
            </>

            <>
              <label htmlFor="affiliation" className='form-label'>Affiliation</label>
              <input type="text" name="affiliation" value={affiliation} onChange={e => setAffiliation(e.target.value)} className='form-control' />
            </>

            <>
              <label htmlFor="quirkName" className='form-label'>Quirk</label>
              <input type="text" name="quirkName" value={quirkName} onChange={e => setQuirkName(e.target.value)} className='form-control' />
            </>

            <>
              <label htmlFor="quirkDescription" className='form-label'>Quirk Description</label>
              <input type="text" name="quirkDescription" value={quirkDescription} onChange={e => setQuirkDescription(e.target.value)} className='form-control' />
            </>

            <>
              <label htmlFor="birthday" className='form-label'>Birthday</label>
              <input type="text" name="birthday" value={birthday} onChange={e => setBirthday(e.target.value)} className='form-control' />
            </>

            <>
              <label htmlFor="height" className='form-label'>Height</label>
              <input type="text" name="height" value={height} onChange={e => setHeight(e.target.value)} className='form-control' />
            </>
          </div>

          <div className='col'>
            <>
              <label htmlFor="bloodtype" className='form-label'>Bloodtype</label>
              <input type="text" name="bloodtype" value={bloodtype} onChange={e => setBloodtype(e.target.value)} className='form-control' />
            </>

            <>
              <label htmlFor="birthplace" className='form-label'>Birthplace</label>
              <input type="text" name="birthplace" value={birthplace} onChange={e => setBirthplace(e.target.value)} className='form-control' />
            </>

            <>
              <label htmlFor="personality" className='form-label'>Personality</label>
              <input type="text" name="personality" value={personality} onChange={e => setPersonality(e.target.value)} className='form-control' />
            </>

            <>
              <label htmlFor="ultimateMoves" className='form-label'>Ultimate Move</label>
              <input type="text" name="ultimateMoves" value={ultimateMoves} onChange={e => setUltimateMoves(e.target.value)} className='form-control' />
            </>

            <>
              <label htmlFor="image" className='form-label'>Image URL</label>
              <input type="text" name="image" value={image} onChange={e => setImage(e.target.value)} className='form-control' />
            </>

            <>
              <label htmlFor="description" className='form-label'>Description</label>
              <textarea name="description" value={description} onChange={e => setDescription(e.target.value)} className='form-control' />
            </>
            <div className='row'>
              <button className='col btn btn-danger mt-2' onClick={e=>navigate('/admin/dashboard')}>Cancel</button>
              <button type="submit" className='col btn btn-primary mt-2'>Submit</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default CharacterForm
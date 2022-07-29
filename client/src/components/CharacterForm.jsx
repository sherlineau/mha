import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

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
    <Container className='m-3 p-3'>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col>
            <Form.Group className='mb-3'>
              <Form.Label htmlFor='name'>Name</Form.Label>
              <Form.Control type='text' name='name' value={name} onChange={e => setName(e.target.value)} />
            </Form.Group>

            <Form.Group className='mb-3'>
              <Form.Label htmlFor='alias'>Alias</Form.Label>
              <Form.Control type='text' name='alias' value={alias} onChange={e => setAlias(e.target.value)} />
            </Form.Group>

            <Form.Group className='mb-3'>
              <Form.Label htmlFor='affiliation'>Affiliation</Form.Label>
              <Form.Select name='affiliation' value={affiliation} onChange={e => setAffiliation(e.target.value)}>
                <option hidden />
                <option value='Hero'>Hero</option>
                <option value='Villian'>Villian</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className='mb-3'>
              <Form.Label htmlFor='quirkName'>Quirk</Form.Label>
              <Form.Control type='text' name='quirkName' value={quirkName} onChange={e => setQuirkName(e.target.value)} />
            </Form.Group>

            <Form.Group className='mb-3'>
              <Form.Label htmlFor='quirkDescription'>Quirk Description</Form.Label>
              <Form.Control as='textarea' name='quirkDescription' value={quirkDescription} onChange={e => setQuirkDescription(e.target.value)} />
            </Form.Group>

            <Form.Group className='mb-3'>
              <Form.Label htmlFor='birthday'>Birthday</Form.Label>
              <Form.Control type='text' name='birthday' value={birthday} onChange={e => setBirthday(e.target.value)} />
            </Form.Group>

            <Form.Group className='mb-3'>
              <Form.Label htmlFor='height'>Height</Form.Label>
              <Form.Control type='text' name='height' value={height} onChange={e => setHeight(e.target.value)} />
            </Form.Group>
          </Col>

          <Col>
            <Form.Group className='mb-3'>
              <Form.Label htmlFor='bloodtype'>Bloodtype</Form.Label>
              <Form.Control type='text' name='bloodtype' value={bloodtype} onChange={e => setBloodtype(e.target.value)} />
            </Form.Group>

            <Form.Group className='mb-3'>
              <Form.Label htmlFor='birthplace'>Birthplace</Form.Label>
              <Form.Control type='text' name='birthplace' value={birthplace} onChange={e => setBirthplace(e.target.value)} />
            </Form.Group>

            <Form.Group className='mb-3'>
              <Form.Label htmlFor='personality'>Personality</Form.Label>
              <Form.Control type='text' name='personality' value={personality} onChange={e => setPersonality(e.target.value)} />
            </Form.Group>

            <Form.Group className='mb-3'>
              <Form.Label htmlFor='ultimateMoves'>Ultimate Move</Form.Label>
              <Form.Control type='text' name='ultimateMoves' value={ultimateMoves} onChange={e => setUltimateMoves(e.target.value)} />
            </Form.Group>

            <Form.Group className='mb-3'>
              <Form.Label htmlFor='image'>Image URL</Form.Label>
              <Form.Control type='text' name='image' value={image} onChange={e => setImage(e.target.value)} />
            </Form.Group>

            <Form.Group className='mb-3'>
              <Form.Label htmlFor='description'>Description</Form.Label>
              <Form.Control as='textarea' rows={5} name='description' value={description} onChange={e => setDescription(e.target.value)} />
            </Form.Group>
            <Row>
              <ButtonGroup>
                <Button variant='danger' onClick={e => navigate('/admin/dashboard')}>Cancel</Button>
                <Button variant='primary' type='submit'>Submit</Button>
              </ButtonGroup>
            </Row>
          </Col>
        </Row>
      </Form>
    </Container>
  )
}

export default CharacterForm
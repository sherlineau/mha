import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useNavigate, Link } from 'react-router-dom'
import logo from '../../assets/My-Hero-Academia-Logo-500x281.png'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const AdminDashboard = () => {
  const [characters, setCharacters] = useState(null)
  const navigate = useNavigate()

  // load all characters
  useEffect(() => {
    axios.get(`http://localhost:8000/api/people`, { withCredentials: true })
      .then(res => setCharacters(res.data))
      .catch(err => navigate('/login'))
  }, [])

  const logoutHandler = () => {
    axios.get(`http://localhost:8000/api/logout`, { withCredentials: true })
      .then(res => navigate("/"))
      .catch()
  }

  // for modal popup
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  // for delete
  const removeFromList = (characterId) => {
    setCharacters(characters.filter((character) => character._id !== characterId));
  };

  const handleDelete = (characterId) => {
    axios
      .delete(`http://localhost:8000/api/people/${characterId}`, { withCredentials: true })
      .then((res) => removeFromList(characterId))
      .catch((err) => console.log(err));
  };

  return (
    <div className='container m-5 mx-auto'>
      <div className='d-flex justify-content-between align-items-center'>
        <h1 className='display-5'><img src={logo} style={{ width: "180px" }} alt="My Hero Academia Logo" /> My Hero Academia</h1>
        <button onClick={logoutHandler} className='btn btn-danger btn-md'>Logout</button>
      </div>
      <div className='d-flex justify-content-center m-2'>
        <Link to='/admin/new' className='btn btn-success' >Add a new character to the database</Link>
      </div>
      <table className='table'>
        <thead>
          <tr>
            <td>Name</td>
            <td>Alias</td>
            <td>ID</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          {characters && characters.map((character, i) => (
            <tr key={i}>
              <td>{character.name}</td>
              <td>{character.alias}</td>
              <td>{character._id}</td>
              <td>
                <Link to={`/admin/${character._id}`} className='btn btn-primary'> Edit </Link>
                <Button variant="danger" onClick={handleShow}>
                  Delete
                </Button>

                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Delete Confirmation</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>Are you sure you want to delete this author?</Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                    <Button variant="primary" onClick={(e) => {
                      handleDelete(character._id)
                      handleClose()
                    }}>
                      Delete
                    </Button>
                  </Modal.Footer>
                </Modal>


              </td>
            </tr>
          ))
          }
        </tbody>
      </table>
    </div >
  )
}

export default AdminDashboard
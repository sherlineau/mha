import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()
    const [user, setUser] = useState({
        email: "",
        password: "",
    })

    const changeHandler = (e) => {
        let { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const submitHandler = (e) => {
        e.preventDefault()
        axios.post(`http://localhost:8000/api/login`, user, { withCredentials: true })
            .then(res => navigate("/admin/dashboard"))
            .catch(err => console.log(err.response))
    }


    return (
        <div className='m-5 mx-auto' style={{ width: "500px" }}>
            <h1>Admin Login</h1>
            <form onSubmit={submitHandler}>
                <div>
                    <label className='form-label'>Email</label>
                    <input type="text" name="email" value={user.email} onChange={changeHandler} className='form-control' />
                </div>
                <div>
                    <label className='form-label'>Password</label>
                    <input type="password" name="password" value={user.password} onChange={changeHandler} className='form-control' />
                </div>
                <div className='d-grid mt-3'>
                    <button className='btn btn-warning'> Login </button>
                </div>
            </form>
        </div>
    )
}

export default Login
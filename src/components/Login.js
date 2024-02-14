import React from 'react'
import { useState } from'react';
import { Link, useNavigate } from'react-router-dom';

const Login = () => {
    const [input, setInput] = useState({
        email: "",
        password: ""
    });
    const navigate = useNavigate();
    const handleLogin = (e) => {
        e.preventDefault();
        const loggedUser = JSON.parse(localStorage.getItem("inputs"));
        const loggedInUser = loggedUser.find(user => user.email === input.email && user.password === input.password);
    
    if (loggedInUser) {
        localStorage.setItem('loggedIn', true);
        navigate("/");
    } else {
        alert('Please enter valid credentials');
    }
    }
  return (
    <div className="container d-flex justify-content-center border border-primary p-4" style={{ width: '30%' }}>
            <form style={{ width: '80%' }} onSubmit={handleLogin}  >
                <h1 className="mb-4">Login</h1>
                <label htmlFor='email' className='form-label'>Email</label>
                <input
                    type='text'
                    className="form-control mb-3"
                    id="email"
                    name="email"
                    value={input.email}
                    onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
                    required
                />
                <label htmlFor='password' className='form-label'>Password</label>
                <input
                    type='password'
                    className="form-control mb-3"
                    id="password"
                    name="password"
                    value={input.password}
                    onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
                    required
                />
                <button type="submit" className="btn btn-primary">Submit</button>
                <p className="mt-3">Don't have an account? <Link to="/register">Register</Link></p>
            </form>
        </div>
  )
}

export default Login
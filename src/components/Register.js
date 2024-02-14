import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    
    const [input, setInput] = useState({
        name: "",
        email: "",
        password: ""
    });
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        
        const user = JSON.parse(localStorage.getItem("inputs")) || [];
        
        const updatedUser = [...user,input]
        
        localStorage.setItem("inputs", JSON.stringify(updatedUser));
        
        console.log('Inputs stored successfully');
        
        navigate('/login');
      }
    return (
        <div className="container d-flex justify-content-center border border-primary p-4" style={{ width: '30%' }}>
            <form style={{ width: '80%' }} onSubmit={handleSubmit}>
                <h1 className="mb-4">Register</h1>
                <label htmlFor='name' className='form-label'>Name</label>
                <input
                    type='text' 
                    className="form-control mb-3"
                    id="name"
                    name="name"
                    value={input.name}
                    onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
                    required
                />
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
                <p className="mt-3">Already have an account? <Link to="/login">Login</Link></p>
            </form>
        </div>
    );
}

export default Register;

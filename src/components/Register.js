import React, { useState } from 'react';

const Register = () => {
    const [input, setInput] = useState({
        name: "",
        email: "",
        password: ""
    });

    return (
        <div className="container d-flex justify-content-center border border-primary p-4" style={{ width: '30%' }}>
            <form style={{ width: '80%' }}>
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
            </form>
        </div>
    );
}

export default Register;

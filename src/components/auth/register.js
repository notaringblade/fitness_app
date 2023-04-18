import React, { useState } from "react";
import "./register.css";

function Register({change}) {
  // React States
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // server functions
  async function registerUser (event) {
    event.preventDefault()
    const response = await fetch('http://localhost:1337/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username,
        email,
        password
      }),

    })
    const data = await response.json()
    console.log(data);
  }

  const renderForm = (
    <div className="form">
      <form onSubmit={registerUser}>
      <div className="input-container">
          <label>Username </label>
          <input onChange={(e) => setUsername(e.target.value)} value={username} type="text" name="username" required />
        </div>
        <div className="input-container">
          <label>Email </label>
          <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" name="username" required />
        </div>
        <div className="input-container">
          <label>Password </label>
          <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" name="password" required />
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
        <p onClick={change} >Login Instead</p>
      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Sign Up</div>
        {renderForm}
      </div>
    </div>
  );
}

export default Register;
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./login.css";


function Login({change, router}) {
  // React States
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const navigate = useNavigate();

  async function loginUser(event) {
		event.preventDefault()

		const response = await fetch('http://localhost:1337/api/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				username,
				password,
			}),
		})

		const data = await response.json()

		if (data.user) {
			localStorage.setItem('token', data.token)  
      const user = data.user;
      console.log(user);
			alert('Login successful');
      navigate('/home/'+user , {state: {user: user}});
			
		} else {
			alert('Please check your username and password')
		}

    
	}

  const renderForm = (
    <div className="form">
      <form onSubmit={loginUser}>
        <div className="input-container">
          <label>Username </label>
          <input onChange={(e) => setUsername(e.target.value)} value={username} type="text" name="username" required />
        </div>
        <div className="input-container">
          <label>Password </label>
          <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" name="password" required />
        </div>
        <div className="button-container">
          <input type="submit" name="Login"/>
        </div>
        <p onClick={change} >Register Instead</p>

      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Sign In</div>
        {renderForm}
      </div>
    </div>
  );
}

export default Login;
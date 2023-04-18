import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "reactstrap";

export default function HomePageTest() {
  const location = useLocation();
  const user = location.state.user;
  const [username, setUsername] = useState("");
  const Navigate = useNavigate();

  function fetchData(username) {
    if(username.length != 0){

      Navigate('/searchResult/'+username, {state: {query: username}});
    }
    // const response = await fetch(
    //   "http://localhost:1337/api/getWorkout/" + username,
    //   {
    //     method: "get",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   }
    // );

    // const data = await response.json();
    // // console.log(arr);
    // console.log(data);

  }

  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Welcome {user.username}</div>
        <div className="form">
            <div className="input-container"></div>
            <div className="button-container">
              <Link to={"/create/" + user} state={{ user: user }}>
                <Button>
                  <p>Create Workout</p>
                </Button>
              </Link>
              <div className="input-container">
                <label>Username </label>
                <input
                  onChange={(e) => setUsername(e.target.value)}
                  value={username}
                  type="text"
                  name="username"
                  required
                />
              </div>
              <div>
                <p onClick={() => fetchData(username)}>Search</p>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}

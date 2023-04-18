import React, { useState } from "react";
import Login from "./login";
import Register from "./register";

export default function Auth({router}) {
  const [loginState, setLoginState] = useState(true);

  const change = () =>{
    setLoginState(!loginState);
  }

  if (loginState) {
    return (
      <div>
        <Login  router={router} change = {change} />
      </div>
    );
  } else {
    return (
      <div>
        <Register change= {change}/>
      </div>
    );
  }
}

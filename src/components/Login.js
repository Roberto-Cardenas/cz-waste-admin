import "../css/login.css";
import Button from "./Button.js";
import { useHistory } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  // History
  const history = useHistory();

  // State
  const [username, setUsername]  = useState("");
  const [password, setPassword]  = useState("");

  const server = "https://cz-waste-api.herokuapp.com";

  // Functions
  const authenticateUser = async () => {
    const res = await fetch(server + '/session/create.php', {
      method: 'POST',
      headers:{
      'Content-Type':'application/json'
      },
      body: JSON.stringify({
        user: username,
        passphrase: password
      })
    });

    const response = await res.json();

    if (response.ok) {
      // Save token to a cookie
      sessionStorage.setItem('usertoken', response.token);

      // Redirect
      history.push("/dashboard/");
    } else {
      setUsername("");
      setPassword("");
    }
  };

  return (
    <div>
      <div className = "flex-column flex-align-center">
        <h2>Username</h2>
        <input 
          id = "user-name" 
          type = "text"
          value = {username}
          onChange = {(e) => {
           setUsername(e.currentTarget.value);
          }} />
        
        <h2>Passphrase</h2>
        <input 
          id = "password" 
          type = "password"
          value = {password}
          onChange = {(e) => {
           setPassword(e.currentTarget.value);
          }} />
        
        <Button color = "#414A4C" title = "Submit" onClick = {authenticateUser} />
      </div>
    </div>
  )
}

export default Login

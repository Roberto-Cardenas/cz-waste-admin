import { useState } from "react";
import Button from "./Button.js";
import InputPassword from "./InputPassword";
import InputText from "./InputText.js";

const ModifyCredentialsForm = ({ updateCredentials }) => {
  // State
  const [currentUsername, setCurrentUsername] = useState("");
  const [currentPassphrase, setCurrentPassphrase] = useState("");
  const [newUsername, setNewUsername] = useState("");
  const [newPassphrase, setNewPassphrase] = useState("");

  return (
    <div 
      className = "add-panel-form flex-column">
      <h1>Modify Login Credentials</h1>

      <h3>Current Username</h3>
      <InputText 
        classlist = "" 
        value = {currentUsername}
        placeholder = "Current Username"
        onChange = {(e) => setCurrentUsername(e.currentTarget.value)} />

      <h3>Current Passphrase</h3>
      <InputPassword 
        classlist = "" 
        value = {currentPassphrase}
        onChange = {(e) => setCurrentPassphrase(e.currentTarget.value)}
         />
      
      <h3>New Username</h3>
      <InputText 
        classlist = "" 
        value = {newUsername}
        placeholder = "New Username"
        onChange = {(e) => setNewUsername(e.currentTarget.value)} />

      <h3>New Passphrase</h3>
      <InputPassword 
        classlist = "" 
        value = {newPassphrase}
        onChange = {(e) => setNewPassphrase(e.currentTarget.value)} />

      <div className = "flex-row flex-justify-center" >
        <Button color = "#EB5757" title = "Confirm" onClick = {() => {
          updateCredentials(currentUsername, currentPassphrase, newUsername, newPassphrase);
        }} />
      </div> 
    </div>
  )
}

export default ModifyCredentialsForm

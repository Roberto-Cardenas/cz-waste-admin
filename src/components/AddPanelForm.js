import "../css/AddPanelForm.css";
import Button from "./Button.js";
import InputArea from "./InputArea.js";
import InputText from "./InputText.js";
import { useState } from "react";

const AddPanelForm = ( {addNewPanel} ) => {
  // State
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [mainColor, setMainColor] = useState("#EB5757");
  const [secondaryColor, setSecondaryColor] = useState("#ff7783");

  return (
    <div 
      className = "add-panel-form flex-column">
      <h1>Add New Panel</h1>

      <h3>Panel Title</h3>
      <InputText 
        classlist = "" 
        value = {title}
        placeholder = "Add Title"
        onChange = {(e) => setTitle(e.currentTarget.value)} />

      <h3>Panel Description</h3>
      <InputArea
        classlist = ""
        value = {description}
        placeholder = "Add Description"
        onChange = {(e) => setDescription(e.currentTarget.value)} />

      <h3>Main Color</h3>
      <input 
        type = "color" 
        value = {mainColor}
        onChange = {(e) => setMainColor(e.currentTarget.value)} />

      <h3>Secondary Color</h3>
      <input 
        type = "color" 
        value = {secondaryColor}
        onChange = {(e) => setSecondaryColor(e.currentTarget.value)} />

      <div className = "flex-row flex-justify-center" >
        <Button color = "#EB5757" title = "Add" onClick = {() => {
          addNewPanel(title, description, mainColor, secondaryColor);

        }} />
      </div>
    </div>
  )
}

export default AddPanelForm

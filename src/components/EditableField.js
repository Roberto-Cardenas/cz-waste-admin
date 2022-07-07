import InputText from "./InputText.js";
import InputArea from "./InputArea.js";
import { useState } from "react";

const EditableField = ( {element, value, placeholder, classList, type, updateField, field} ) => {
  // Initialize state
  const [editing, setEditing] = useState(false);

  // Functions
  
  // Toggle edit
  const toggleEdit = () => {
    setEditing(!editing);
  };

  const onChange = (e) => {
    updateField(field, e.target.value);
  }

  const doneEditing = (e) => {
    if (e.target.value === "") {
      return;
    }

    toggleEdit();
  }

  // Dynamycally determine the type of element
  const Tag = element;

  return (
    <div className = "flex-column flex-justify-end">
      {editing 
        ? type === "text" 
          ? <InputText 
              classlist = {classList}
              value = {value} 
              placeholder = {placeholder} 
              onChange = {onChange} 
              doneEditing = {doneEditing} />
          : <InputArea 
              classlist = {classList}
              value = {value} 
              placeholder = {placeholder} 
              onChange = {onChange} 
              doneEditing = {doneEditing} /> 
        : <Tag className = {classList} onDoubleClick = {toggleEdit} >{value}</Tag> }
    </div>
  )
}

export default EditableField

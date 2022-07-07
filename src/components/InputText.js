import "../css/InputText.css";

const InputText = ({ classlist, value, placeholder, onChange, doneEditing }) => {
  return (
    <input 
      className = {classlist}
      type = "text" 
      value = {value} 
      placeholder = {placeholder} 
      onChange = {onChange} 
      onBlur = {(e) => {
        doneEditing(e);
      }} 
      onKeyPress = {(e) => {
        if (e.key === "Enter") {
          doneEditing(e);
        }
      }} />
  )
}

export default InputText

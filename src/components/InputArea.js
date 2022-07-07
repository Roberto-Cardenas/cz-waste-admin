import "../css/InputArea.css";

const InputArea = ({ classlist, value, placeholder, onChange, doneEditing }) => {
  return (
    <textarea 
      className = {classlist}
      value = {value} 
      onChange = {onChange} 
      placeholder = {placeholder}
      onBlur = {(e) => {
        doneEditing(e);
      }} 
      onKeyPress = {(e) => {
        if (e.key === "Enter") {
          doneEditing(e);
        }
      }}  ></textarea>
  )
}

export default InputArea

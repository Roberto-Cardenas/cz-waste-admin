import "../css/Button.css";
import React from 'react'

const Button = ({ color, title, onClick }) => {
  return (
    <button 
      className = "clickable"
      style = {{backgroundColor: color}}
      onClick = {onClick} >
      {title}
    </button>
  )
}

export default Button

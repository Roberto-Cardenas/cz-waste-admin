import "../css/HamburgerIcon.css";

const HamburgerIcon = ({ dragHandleProps }) => {
  return (
    <div className = "grabbable"
      {...dragHandleProps} >
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}

export default HamburgerIcon

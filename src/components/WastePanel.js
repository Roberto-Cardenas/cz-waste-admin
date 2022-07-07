import WasteItemList from "./WasteItemList.js";
import EditableField from "./EditableField.js";
import HamburgerIcon from "./HamburgerIcon.js";
import xIcon from "../images/x-icon.png";
import "../css/WastePanel.css";
import { useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';

const WastePanel = ({ panelData, index, updatePanel, removePanel }) => {
  // Set up internal state
  const [open, setOpen] = useState(false);

  // Functions

  // Update a field in the panel
  const updatePanelField = (field, value) => {
    panelData[field] = value;
    updatePanel(panelData);
  };

  // Open and close panel
  const togglePanel = () => {
    setOpen(!open);
  };

  return (
    <Draggable
      draggableId = {panelData.id}
      index = {index} >
      {(provided) => (
        <div 
          className = {open ? "waste-panel open" : "waste-panel"}
          id = {panelData.id}
          {...provided.draggableProps}
          ref = {provided.innerRef}
           >
          {/* Header for dragging and deleting */}
          <div className = "no-select waste-header flex-row flex-justify-space-between flex-align-center">
            <HamburgerIcon dragHandleProps = {provided.dragHandleProps} />
            <img 
              className = "clickable close-icon" 
              alt = "" 
              src = {xIcon} 
              onClick = {() => {
                removePanel(panelData.id);
              }}
              />
          </div>

          {/* Title card for the panel */}
          <div className = "waste-title-card no-select flex-row flex-justify-space-between flex-align-end"
              style = {{ backgroundColor: panelData.titleCardColor }}>
            
            {/* Title */}
            {/* <h1 className = "waste-title editable">{panelData.name}</h1> */}
            <EditableField 
              element = "h1" 
              value = {panelData.name} 
              placeholder = "Edit Title" 
              type = "text" 
              classList = "waste-title editable"
              updateField = {updatePanelField}
              field = "name" />

            {/* Right part of tittle card */}
            <div className = "flex-row flex-align-center">
              {/* Color selector */}
              <h4>Main Color</h4>
              <input 
                className = "waste-panel-color-picker" 
                type = "color" 
                value = {panelData.titleCardColor}
                onChange = {(e) => {

                  updatePanelField("titleCardColor", e.target.value);
                }} />

              {/* Toggler */}
              <div onClick = {togglePanel} className = "waste-btn-icon">
                <i className = "arrow"></i>
                <img className = "x-icon" alt = "" src = {xIcon} />
              </div>
            </div>
              
          </div>

          {/* List of items that go in this panel */}
          <WasteItemList 
            backgroundColor = {panelData.itemsListColor} 
            description = {panelData.description} 
            items = {panelData.entries}
            panelId = {panelData.id}
            updateField = {updatePanelField} />
        </div>
      )}
    </Draggable>
  )
}

export default WastePanel

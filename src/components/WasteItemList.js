import { useState } from "react";
import { Droppable, Draggable } from 'react-beautiful-dnd';
import EditableField from './EditableField';
import HamburgerIcon from './HamburgerIcon';
import xIcon from "../images/x-icon.png";

const WasteItemList = ({ backgroundColor, description, items, panelId, updateField }) => {
  // Functions
  const updatePanelListItem = (id, value) => {
    updateField("entries", items.map((item) => 
      item.id === id ? {...item, name: value} : item
    ));
  };

  const removePanelListItem = (id) => {
    updateField("entries", items.filter((item) => 
      item.id !== id
    ));
  };

  const addPanelListItem = () => {
    const newId = items.length > 0 ? parseInt(items.sort((a, b) => (b.id - a.id))[0].id) + 1 : 0;

    const newItems = Array.from(items);
    newItems.reverse();
    
    updateField("entries", [
      ...newItems,
      {
        id: newId.toString(),
        name: "New Item"
      }
    ])
  };
  
  return (
    <div className = "waste-items-list" style = {{backgroundColor: backgroundColor}}>
      {/* Color selector */}
      <div className = "no-select flex-row flex-justify-end flex-align-center">
        <h4>Secondary Color</h4>
        <input 
          className = "waste-panel-color-picker" 
          type = "color" 
          value = {backgroundColor}
          onChange = {(e) => {
            updateField("itemsListColor", e.target.value);
          }} />
      </div>

      {/* Description */}
      <EditableField 
        element = "h5" 
        value = {description} 
        placeholder = "Edit Description" 
        type = "area" 
        classList = "waste-description editable"
        updateField = {updateField}
        field = "description" />

      {/* Item list */}
      <Droppable
        droppableId = {"item-list-panel-" + panelId} 
        type = {"item-list-" + panelId} >
        {(provided) => (
          <div
            {...provided.droppableProps} 
            ref = {provided.innerRef} >
            {items.map((item, index) => 
              <Draggable
                draggableId = {panelId + "-" + item.id} 
                index = {index}
                key = {item.id} >
                {(providedDrag) => (
                  <div 
                    id = {item.id}
                    className = "flex-row flex-align-center waste-item" 
                    {...providedDrag.draggableProps}
                    
                    ref = {providedDrag.innerRef} >
                    <HamburgerIcon dragHandleProps = {providedDrag.dragHandleProps} />
                    <img 
                      className = "clickable no-select close-icon" 
                      alt = "" 
                      src = {xIcon}
                      onClick = {() => {
                        removePanelListItem(item.id)
                      }} />
                    <EditableField 
                      element = "h4" 
                      value = {item.name} 
                      placeholder = "Edit Item" 
                      type = "text" 
                      classList = "editable"
                      updateField = {updatePanelListItem}
                      field = {item.id} />
                  </div>
                )}
              </Draggable>
            )}
            {provided.placeholder}
          </div>
        )}
      </Droppable>

      {/* Add item to list */}
      <div 
        className = "no-select add-waste-item flex-row flex-justify-end flex-align-center" >
        <h4 onClick = {addPanelListItem} className = "clickable">Add New Item</h4>
      </div>
    </div>
  )
}

export default WasteItemList

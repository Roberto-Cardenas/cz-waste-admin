import WastePanel from "./WastePanel.js";
import { useState } from "react";
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

const WastePanels = ({ wasteData, updateData }) => {
  // Functions
  const removePanel = (id) => {
    updateData(wasteData.filter((panel) => panel.id !== id))
  };

  const handleDragEnd = (result) => {
    const { destination, source, draggableId, type } = result;

    // Check if destination is null
    if (!destination) {
      return;
    }

    // Create new array
    const newData = Array.from(wasteData);

    // Check what type of draggable it is
    if (type === 'waste-panels') {
      // Get panel we are reordering
      const reorderedPanel = newData.find((panel) => (
        panel.id === draggableId
      ));

      // Reorder list
      newData.splice(source.index, 1);
      newData.splice(destination.index, 0, reorderedPanel);

      updateData(newData);
    } else {
      // Find panel wastelist belongs to
      const panelId = type.charAt(type.length - 1);
      const panel = newData.find((panel) => (
        panel.id === panelId
      ));

      // Copy of items list
      const items = Array.from(panel.entries);

      // Get item to be reordered
      const reorderedItemId = draggableId.charAt(draggableId.length - 1);
      const reorderedItem = items.find((item) => (
        item.id === reorderedItemId
      ));

      // Reorder list
      items.splice(source.index, 1);
      items.splice(destination.index, 0, reorderedItem);

      updatePanel({
        ...panel,
        entries: items
      });
    }
  };

  const updatePanel = (panelData) => {
    // Replace paneldata in the original array
    const index = wasteData.findIndex((panel) => {
      return panel.id === panelData.id;
    });
    wasteData[index] = panelData;

    // Update app state
    updateData(wasteData);
  };

  return (
      <DragDropContext
        onDragEnd = {handleDragEnd} >
        {/* Create a panel for every instance */}
        <Droppable
          droppableId = {"waste-panels"} 
          type = {"waste-panels"} >
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref = {provided.innerRef} >
              {wasteData.map((panelData, index) => 
                <WastePanel 
                  key = {panelData.id} 
                  panelData = {panelData} 
                  index = {index}
                  updatePanel = {updatePanel} 
                  removePanel = {removePanel}
                  />
              )}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
  )
}

export default WastePanels

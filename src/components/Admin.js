import WastePanels from "./WastePanels.js";
import AddPanelForm from "./AddPanelForm.js";
import ModifyCredentialsForm from "./ModifyCredentialsForm.js";
import Button from "./Button.js";
import { useState, useEffect } from "react";

const Admin = () => {

  ///////////////////////////
  // Set up state
  ///////////////////////////

  const [wasteData, setWasteData] = useState({
    data: []
  });

  const [showAddPanel, setShowAddPanel] = useState(false);
  const [showCredentialsPanel, setShowCredentialsPanel] = useState(false);

  /////////////////////////////
  // Do on load
  /////////////////////////////

  useEffect(() => {
    const getWasteData = async () => {
      const data = await fetchWasteData();

      setWasteData(data);
    };

    getWasteData();
  }, [])

  const server = "https://cz-waste-api.herokuapp.com";

  ////////////////////
  // UI Functions
  ////////////////////

  // Update data
  const updateCurrentData = (newData) => {
    setWasteData({
      data: newData
    });
  }

  // Toggle add panel
  const toggleAddPanel = () => {
    setShowAddPanel(!showAddPanel);
  }

   // Toggle modify credentials
   const toggleModifyCredentials = () => {
    setShowCredentialsPanel(!showCredentialsPanel);
  }

  // Add new panel
  const addNewPanel = (title, description, mainColor, secondaryColor) => {
    // Verify input
    if (title === ""
        || description === "") {
      toggleAddPanel();
      return;
    }
    
    const newId = wasteData.data.length > 0 
                    ? parseInt(wasteData.data.sort((a, b) => (b.id - a.id))[0].id) + 1
                    : 0;

    
    // Copy panel array and add append new one at the end
    const newData = Array.from(wasteData.data);
    newData.reverse();

    updateCurrentData([
      ...newData,
      {
        id: newId.toString(),
        name: title,
        description: description,
        titleCardColor: mainColor,
        itemsListColor: secondaryColor,
        entries: []
      }
    ]);

    toggleAddPanel();
  };

  const resetChanges = async () => {
    const response = await fetchWasteData();

    setWasteData(response);
  };

  const saveChanges = async () => {
    const response = await putWasteData(wasteData);

    // Message to user to indcate success or failure
    if (response.ok) {
      alert("Succesfully saved data");
    } else {
      alert("You dont have permission to modify this page");
    }
  };

  const updateCredentials = async (oldUsername, oldPassphrase, newUsername, newPassphrase) => {
    const response = await updateCredentialsData(oldUsername, oldPassphrase, newUsername, newPassphrase);

    if (response.ok) {
      alert("Succesfully modified login credentials");
      toggleModifyCredentials();
    } else {
      alert("Incorrect login credentials or you dont have permission to modify credentials");
    }
  };


  ////////////////////
  // API Functions
  ////////////////////

  // Get waste data
  const fetchWasteData = async () => {
    const res = await fetch(server + '/waste/read.php');
    const data = await res.json();

    return data;
  };

  // Put waste data
  const putWasteData = async (data) => {
    const res = await fetch(server + '/waste/update.php', {
      method: 'PUT',
      headers:{
      'Content-Type':'application/json'
      },
      body: JSON.stringify({
        token: sessionStorage.getItem('usertoken'),
        object: data
      })
    });

    const response = await res.json();

    return response;
  };

  // Modify user credentials
  const updateCredentialsData = async (currentUsername, currentPassphrase, newUsername, newPassphrase) => {
    const res = await fetch(server + '/credentials/update.php', {
      method: 'PUT',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify({
        token: sessionStorage.getItem('usertoken'),
        oldUsername: currentUsername,
        oldPassphrase: currentPassphrase,
        newUsername: newUsername,
        newPassphrase: newPassphrase
      })
    });

    const response = await res.json();

    return response;
  };
  
  return (
    <>
      {/* Save/Reset Buttons */}
      <div className = "flex-row flex-align-center flex-justify-center flex-wrap">
        <Button color = "#EB5757" title = {showAddPanel ? "Close" : "Add Panel"} onClick = {toggleAddPanel} />
        <Button color = "#EB5757" title = "Modify Credentials" onClick = {toggleModifyCredentials} />
        <Button color = "#414A4C" title = "Reset Changes" onClick = {resetChanges} />
        <Button color = "#414A4C" title = "Save Changes" onClick = {saveChanges} />
      </div>

      {/* Modify credentials panel toggle */}
      <div 
        className = "flex-column flex-justify-center flex-align-center"
        style = {{margin: "20px 0"}} >
        {showCredentialsPanel && <ModifyCredentialsForm updateCredentials = {updateCredentials} />}
      </div>

      {/* Add panel toggle */}
      <div 
        className = "flex-column flex-justify-center flex-align-center"
        style = {{margin: "20px 0"}} >
        {showAddPanel && <AddPanelForm addNewPanel = {addNewPanel} />}
      </div>

      {/* Editable Waste Panels */}
      <WastePanels updateData = {updateCurrentData} wasteData = {wasteData.data} />
    </>
  )
}

export default Admin

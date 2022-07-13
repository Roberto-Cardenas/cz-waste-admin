# cz-waste-admin #
Administrator website for the Casa Zimbabwe Waste Information Website. Casa Zimbabwe is a student housing unit that is part of the Berkeley Student Cooperative.

Demo Server: https://cz-waste-admin.herokuapp.com/

*Please feel free to play around with the server. Any changes you make will be reflected on the [main website](https://cz-waste.herokuapp.com/):*

* Username: wrm
* Password: wrm

The client is built utilizing ReactJS and is fully responsive. The website consumes and writes its data from and to a simple [API](https://github.com/Roberto-Cardenas/cz-waste-api) written in PHP.

The intention of this website is to allow the Waste Reduction Manager of the unit to provide an accesible and centralized way for members of the cooperative to find the relevant information when it comes to sorting waste properly in the 124 person unit. The WRM (Waste Reduction Manager) can easily update this information on the main site by using this tool. I wrote this project during my time in the WRM position in order to fulfill my duties of educating my fellow housemates on proper waste disposal and with the hope that it would be useful for the managers that would come after me.

## Editing the content ##

*The information on the site is organized in panels, these panels can be added, edited, reordered and deleted as the WRM sees fit. Within each panel there is a list of items that correspond to that specific type of waste, they can easily be added, edited, deleted, and reordered within that panel.*

### Adding a panel ###
Click on the "Add Panel" button on the top of the site. This opens up a form where you can set the panels title, description, and select the colors you want for the panel. The item list will be added later after the panel is created. Click the "Add" button to create the panel.

### Editing a panel ###
Editing a panel is very simple. Double click on any content you wish to edit, make the edit and press the enter key. To edit the color open the color selector and select the color you want it will update automatically.

### Adding items to a panel's list ###
To add an item to a panels list open the desired panel by clicking on the carrot icon to the right of the title. Go to the bottom of the list and click on "Add item". A new item will be added to the bottom of the list and you can double click on it to edit the content to whatever you need it to be.

### Reordering a panel ###
To reorder a panel simply click on the hamburger icon on the top left of the panel and drag it to the desired position within the column of panels.

### Reordering items within a panel's list ###
Similarly to reordering a panel, simply click and drag the item from its hamburger icon and drop it where you wish to position it within the panel.

### Deleting a panel ###
Click on the X on the top right of the panel to delete it.

### Deleting an item within a panel ###
Click on the X on the left of the item.

### Saving the changes ###
Up until this point the changes you have made are only local, in order for them to be reflected to the main website they must be saved. To do this simply click on the "Save Changes" button on the top of the page.

### Reverting local changes ###
If you make a local change (changes that have not yet been updated on the server) and wish to go back to your last saved point click on the "Reset Changes" button.

## Updating login credentials ##

*This administrator would not be useful to the WRM if they could not change the login credentials when needed. This demo version has the feature disabled on the backend for obvious reasons. You can still play around with the form if you wish.*

To update the credentials click "Modify Credentials" and fill out the form with the current credentials and the new credentials you wish to have.

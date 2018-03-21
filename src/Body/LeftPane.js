import React from 'react';
import {Paper} from 'material-ui';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import HomeIcon from 'material-ui-icons/Home';
import FaceIcon from 'material-ui-icons/Face';
import PaletteIcon from 'material-ui-icons/Palette';
import FoodIcon from 'material-ui-icons/RoomService';

const LeftPane = ({route}) => {
	return (
		<div>
		  <Paper style = {{ padding: 20, marginTop: 10, marginBottom: 10}}>
			 <List component="nav">
			    <ListItem button onClick={()=>route("home")}>
		          <ListItemIcon>
		            <HomeIcon />
		          </ListItemIcon>
		          <ListItemText primary="Home" />
		        </ListItem>
		        <ListItem button onClick={()=>route("Face")}>
		          <ListItemIcon>
		            <FaceIcon />
		          </ListItemIcon>
		          <ListItemText primary="Face" />
		        </ListItem>
		        <ListItem button onClick={()=>route("Color")}>
		          <ListItemIcon>
		            <PaletteIcon />
		          </ListItemIcon>
		          <ListItemText primary="Color" />
		        </ListItem>
		        <ListItem button onClick={()=>route("Food")}>
		          <ListItemIcon>
		            <FoodIcon />
		          </ListItemIcon>
		          <ListItemText primary="Food" />
		        </ListItem>
		      </List>
          </Paper>
		</div>
		);
}

export default LeftPane;
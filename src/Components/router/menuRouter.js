import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { NavLink } from 'react-router-dom';

import { connect } from 'react-redux';
import { initiateStateAction } from '../redux/actions';

const mapDispatchToProps = (dispatch) => {
  return {
    oninitiateStateAction: () => dispatch(initiateStateAction())
  }
}

const MainMenuItems = ({oninitiateStateAction}) => {

  return (
      <div>
      <NavLink to="/boda/" exact style={{textDecoration: "none"}}>
        <ListItem button className="firstMenu" onClick={()=>oninitiateStateAction()}>
            <span><i className="fas fa-home sidebarIcons"></i></span>
          <ListItemText primary="Dashboard" />
        </ListItem>
      </NavLink>
      <NavLink to="/boda/Face" style={{textDecoration: "none"}}>
        <ListItem button className="secondMenu" onClick={()=>oninitiateStateAction()}>
            <span><i className="far fa-laugh-squint sidebarIcons"></i></span>
          <ListItemText primary="Face"/>
        </ListItem>
      </NavLink>
      <NavLink to="/boda/Color" style={{textDecoration: "none"}}>
        <ListItem button className="thirdMenu" onClick={()=>oninitiateStateAction()}>
            <span><i className="fas fa-palette sidebarIcons"></i></span>
          <ListItemText primary="Color" />
        </ListItem>
      </NavLink>
      <NavLink to="/boda/Food" style={{textDecoration: "none"}}>
        <ListItem button className="fourthMenu" onClick={()=>oninitiateStateAction()}>
            <span><i className="fas fa-utensils sidebarIcons"></i></span>
          <ListItemText primary="Food" />
        </ListItem>
      </NavLink>
      </div>
  );
}

export default connect(undefined, mapDispatchToProps)(MainMenuItems);
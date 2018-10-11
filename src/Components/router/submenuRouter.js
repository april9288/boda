import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

export const SubMenuItems = (
  <div>
    <ListItem button component="a" target="_blank" rel="noopener noreferrer" href="https://github.com/april9288/">
        <span><i className="fab fa-github-alt sidebarIcons"></i></span>
      <ListItemText primary="Github" />
    </ListItem>
    <ListItem button component="a" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/jongho-kim-b05618170/">
        <span><i className="fab fa-linkedin sidebarIcons"></i></span>
      <ListItemText primary="Linkedin" />
    </ListItem>
    <ListItem button component="a" target="_blank" rel="noopener noreferrer" href="https://april9288.github.io">
        <span><i className="fas fa-rocket sidebarIcons"></i></span>
      <ListItemText primary="Portfolio" />
    </ListItem>
  </div>
);
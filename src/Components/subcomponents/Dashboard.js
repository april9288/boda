import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Hidden from '@material-ui/core/Hidden';
import Divider from '@material-ui/core/Divider';
import MenuIcon from '@material-ui/icons/Menu';

import MainMenuItems from '../router/menuRouter';
import {SubMenuItems} from '../router/submenuRouter';

import { connect } from 'react-redux';

const drawerWidth = 240;
const styles = theme => ({
  root: {
    flexGrow: 1,
    height: "100vh",
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
  },
  appBar: {
    position: 'absolute',
    marginLeft: drawerWidth,
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  navIconHide: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    background: "rgb(168, 84, 144)",
    height: "100vh",
    width: drawerWidth,
    [theme.breakpoints.up('md')]: {
      position: 'relative',
    },
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
  },
  title: {
    color: "white",
  },
});

class Dashboard extends React.Component {
  state = {
    mobileOpen: false,
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

render(){
	const { classes } = this.props;

	const drawer = (
      <div>
        <div className={classes.toolbar} />
        <Divider />
        <List><MainMenuItems /></List>
        <Divider />
        <List>{SubMenuItems}</List>
      </div>
    );


	return (
		<div>

		    <Hidden mdUp>
          <Drawer
            variant="temporary"
            open={this.state.mobileOpen}
            onClose={this.handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>

	        <AppBar className={classes.appBar} style= {{backgroundColor : "rgb(168, 84, 144)"}}>
	          <Toolbar>
	            <IconButton
	              color="inherit"
	              aria-label="Open drawer"
	              onClick={this.handleDrawerToggle}
	              className={classes.navIconHide}
	            >
	              <MenuIcon />
	            </IconButton>
	            <Typography variant="h6" color="inherit" noWrap className={classes.title}>
	              Dashboard
	            </Typography>
	          </Toolbar>
	        </AppBar>

	    <main className={classes.content}>
        <div className={classes.toolbar} />
      </main>

		</div>
	);
}
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

const styledComponent = withStyles(styles, { withTheme: true })(Dashboard);
export default connect()(styledComponent);
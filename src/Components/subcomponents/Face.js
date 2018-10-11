import React from 'react';
import ChartFace from './ChartFace';
import FaceResult from './FaceResult';
import Progressbar from './Progressbar';
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
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles/colorManipulator';
import SearchIcon from '@material-ui/icons/Search';

import MainMenuItems from '../router/menuRouter';
import {SubMenuItems} from '../router/submenuRouter';

import { connect } from 'react-redux';
import { searchFieldAction, requestDetectionAction } from '../redux/actions';

const mapStateToProps = (state) => {
  return {
    searchField: state.searchFieldReducer.searchField,
    detectionResults: state.requestDetectionReducer.detectionResults,
    isPending : state.requestDetectionReducer.isPending,
    error: state.requestDetectionReducer.error,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onsearchFieldAction: (event) => dispatch(searchFieldAction(event.target.value)),
    onrequestDetectionAction: (model, url) => dispatch(requestDetectionAction(model, url)),
  }
}


const drawerWidth = 240;

const styles = theme => ({
  root: {
    height: "100vh",
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
  drawerPaper: {
    background: "rgb(168, 84, 144)",
    height: "100vh",
    width: drawerWidth,
    [theme.breakpoints.up('md')]: {
      position: 'relative',
    },
  },
  content: {
    marginTop: "60px!important",
    [theme.breakpoints.down('sm')]: {
      marginTop: "56px!important",
    },
    width:"100%",
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    justifyContent: "center",
    display:"inline-grid",
    flexWrap: "wrap",
    overflowX: "hidden",
    overflowY: "auto",
  },
  title: {
    color: "white",
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  grow: {
    flexGrow: 1,
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit * 3,
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 400,
    },
  },
  bigSearchDiv :{
    margin: theme.spacing.unit,
  }
});

class Face extends React.Component {
  state = {
    mobileOpen: false,
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  enter = (event) => {
      if (event.key === "Enter") {
        this.props.onrequestDetectionAction("Face", this.props.searchField);
      }
  }

render(){
  const { classes, onsearchFieldAction, searchField, detectionResults, isPending, error } = this.props;

    const calculateFaceLocation = (data) => {
      let image = document.querySelector('#inputimage');
      let width = Number(image.width);
      let height = Number(image.height);
      return data.outputs[0].data.regions.map((value, i) => 
              ({leftCol: value.region_info.bounding_box.left_col*width,
                topRow: value.region_info.bounding_box.top_row * height,
                rightCol: width - (value.region_info.bounding_box.right_col * width),
                bottomRow: height - (value.region_info.bounding_box.bottom_row * height),
                age: value.data.face.age_appearance.concepts,
                gender: value.data.face.gender_appearance.concepts,
                culture: value.data.face.multicultural_appearance.concepts}));
    }

    let faceResultsForCharts = [];
    let internalError = false;

    try {
      if (detectionResults) {
        faceResultsForCharts = calculateFaceLocation(detectionResults);
      }
    }
    catch(err) {
      internalError = true;
    }



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
    <div className={classes.root}>

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




          <AppBar className={classes.appBar} style= {{backgroundColor : "rgb(227, 104, 131)"}}>
            <Toolbar>
            
              <IconButton
                color="inherit"
                aria-label="Open drawer"
                onClick={this.handleDrawerToggle}
                className={classes.navIconHide}
              >
                <MenuIcon />
              </IconButton>
            <section className = "ColorSection">
              <Typography variant="h6" color="inherit" noWrap className={classes.title}>
                Face
              </Typography>


              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  onChange={onsearchFieldAction}
                  onKeyPress={this.enter}
                  placeholder={`insert face image url`}
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                />
              </div>

            </section>

            </Toolbar>
              {
              (isPending) &&
              <Progressbar />
              }
          </AppBar>

        <main className={classes.content}>
              {
                (error || internalError)
                ? <h1>Error! Check the format of the photo</h1>
                : (searchField)
                && <FaceResult img={searchField} face={faceResultsForCharts} />
              }
              {
                faceResultsForCharts
                && faceResultsForCharts.map((val,i) => <ChartFace key={val.topRow} num={i} age={val.age} gender={val.gender} culture={val.culture}/>)
              }
        </main>

    </div>
  );
}
}

Face.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

const styledComponent = withStyles(styles, { withTheme: true })(Face);
export default connect(mapStateToProps, mapDispatchToProps)(styledComponent);




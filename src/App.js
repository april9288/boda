import React, { Component } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import LeftPane from './Body/LeftPane';
import RightPane from './Body/RightPane';
import {Grid} from 'material-ui';
import './App.css';
import Clarifai from 'clarifai';
import Modal from 'material-ui/Modal';
import Typography from 'material-ui/Typography';

const app = new Clarifai.App({
 apiKey: 'f83c70bced734eb0ab4f25d3dc639211'
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      route : '',
      input_url:'',
      submit_url:'',
      result: [],
      open: false
    }
  }

  onNavClick = (route) => {
    this.setState({route});
    this.setState({input_url:'', submit_url: '', result: ''});
  }

  rand = () => {
    return Math.round(Math.random() * 20) - 10;
  }

  getModalStyle = () => {
    const top = 50 + this.rand();
    const left = 50 + this.rand();
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
      position: 'absolute',
      width: 300,
      backgroundColor: "rgba(201, 76, 176, 0.8)",
      boxShadow: "5px 10px #888888",
      padding: 20,
    };
  }

  handleOpen = () => {
    this.setState({ open: true });
  }

  handleClose = () => {
    this.setState({ open: false });
  }

  clear = (e) => {
    console.log("clear clicked : ", e);
    this.setState({input_url:'', submit_url: '', result: ''});
  }

  search = (event) => {
    this.setState({input_url: event.target.value});
  }

  click = (model) => {
    this.setState({submit_url: this.state.input_url});
    let models;
    if (model === "demo") {
      models = Clarifai.DEMOGRAPHICS_MODEL;
    } else if (model === "color") {
      models = Clarifai.COLOR_MODEL;
    } else if (model === "food") {
      models = Clarifai.FOOD_MODEL;
    } else if (model === "general") {
      models = Clarifai.GENERAL_MODEL
    }
    app.models.predict(models, this.state.input_url)
    .then(result => this.setState({result}))
    .catch(e => this.setState({ open: true, input_url:'', submit_url:''}))
  }

  render() {
    return (
      <div className="App">
        <Header />
          <Grid container>
            <Grid item xs={12}sm={3}>
              <LeftPane route={this.onNavClick}/>
            </Grid>
            <Grid item xs={12}sm={9}>
              <RightPane 
                  route = {this.state.route}
                  image = {this.state.submit_url} 
                  search = {this.search} 
                  text = {this.state.input_url}
                  click = {this.click}
                  result = {this.state.result}
                  clear = {this.clear}
                   />
            </Grid>
          </Grid>
            <Modal open={this.state.open} onClose={this.handleClose} >
              <div style={this.getModalStyle()} >
                <Typography variant="title" id="modal-title">
                  Bad Request!
                </Typography>
                <Typography variant="subheading" id="simple-modal-description">
                  Please try again! This is not a good file.
                </Typography>
              </div>
            </Modal>
        <Footer />
      </div>
    );
  }
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './components/Main';
import registerServiceWorker from './registerServiceWorker';

import { searchFieldReducer, requestDetectionReducer } from './components/redux/reducers';
import { createLogger } from 'redux-logger';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';


import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

//color palette
//rgb(94,73,138)
//rgb(168, 84, 144)
//rgb(227, 104, 131)
//rgb(255, 142, 111)
//rgb(255, 193, 97)
//rgb(249, 248, 113)

const theme = createMuiTheme({
   palette: {
    primary: {
      main: 'rgb(94,73,138)',
    },
    secondary: {
      main: 'rgb(249, 248, 113)',
    },  
    typography: {
    useNextVariants: true,
    },
  },
});

const logger = createLogger();
const rootReducers = combineReducers({searchFieldReducer, requestDetectionReducer})
const store = createStore(rootReducers, applyMiddleware(thunkMiddleware, logger))

ReactDOM.render(
<MuiThemeProvider theme={theme}>
  <Provider store={store}>
    <Main/>
  </Provider>
</MuiThemeProvider>,
  document.getElementById('root')
);
registerServiceWorker();




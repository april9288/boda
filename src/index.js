import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './components/Main';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { searchFieldReducer, requestDetectionReducer } from './components/redux/reducers';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

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
let middleware = [thunkMiddleware];
if (process.env.NODE_ENV === 'development') { 
  middleware.push(logger)
};

const rootReducers = combineReducers({searchFieldReducer, requestDetectionReducer});
const store = createStore(rootReducers, applyMiddleware(...middleware));

ReactDOM.render(
<MuiThemeProvider theme={theme}>
  <Provider store={store}>
    <Main/>
  </Provider>
</MuiThemeProvider>,
  document.getElementById('root')
);
registerServiceWorker();




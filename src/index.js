// Module imports
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/createStore'; 

// Component imports
import App from './components/app.jsx';

// Reducer imports 
import { rootReducer } from './reducers/index'; 

ReactDOM.render(
    <Provider store={store}>
    	<App />
    </Provider>
    ,document.querySelector('.container')
);

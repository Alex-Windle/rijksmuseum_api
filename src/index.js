// Module imports
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createStoreWithMiddleware from './store/createStore'; 

// Component imports
import App from './containers/App.jsx';

// Reducer imports 
import { rootReducer } from './reducers/index'; 
import reducers from './reducers/index';

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(
    	reducers,
    	{}, 
    	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    )}>
    	<App />
    </Provider>
    ,document.querySelector('.container')
);

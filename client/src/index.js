import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
//applymiddleware lets us connect thunk to our redux store.
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import Navigation from './components/Navigation';
import reducers from './reducers';
//we can export reducers like this because the file where 
//our reducers are contained is named index.js


//for redux, we must wrap our App component with an instance of Provider component
//pass provider component a single prop called store.

//just so i can bring this into my components to see how
//to dispatch actions without connect function.
//also hooking up thunk to our redux store.
export const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
<Provider store={store}>
    <Navigation />
</Provider>, 
document.getElementById('root')
);



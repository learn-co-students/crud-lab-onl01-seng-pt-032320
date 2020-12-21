import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import manageRestaurant from './reducers/manageRestaurant';
import{ combineReducers } from 'redux'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import restaurants from './reducers/manageRestaurant.js'
import reviews from './reducers/manageRestaurant.js'

export default combineReducers({
  restaurants,
  reviews
})

const store = createStore(manageRestaurant);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
document.getElementById('root')
);

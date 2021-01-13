import { combineReducers } from "redux";
import cuid from 'cuid';

const rootReducer = combineReducers({ restaurants: resReducer, reviews: revReducer });
export default rootReducer;

// export default function manageRestaurants(state = {restaurants: [], reviews: [],}, action) {

function resReducer(state = [], action) {
  switch (action.type) {
    case 'ADD_RESTAURANT':
      let newRes = { ...action.restaurant, id: cuid() };
      return [...state, newRes];
    case 'DELETE_RESTAURANT':
      return state.filter(res => res.id !== action.id)
    default:
      return state;
  }
}

function revReducer(state = [], action) {
  switch (action.type) {
    case 'ADD_REVIEW':
      let newRev = { ...action.review, id: cuid() };
      return [...state, newRev];
    case 'DELETE_REVIEW':
      return state.filter(rev => rev.id !== action.id)
    default:
      return state;
  }
}

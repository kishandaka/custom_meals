import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import mealsReducer from './reducers/meals'
import logger from 'redux-logger';


const AppReducers = combineReducers({
    meals:mealsReducer
   });

const rootReducer = (state, action) => {
    return AppReducers(state, action)
  }
  
  

const store = createStore(rootReducer ,applyMiddleware(logger,thunk));

export default store;


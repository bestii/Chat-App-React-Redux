import { combineReducers } from 'redux';
import BookReducer from './reducer_book';
import ActiveBook from './reducer_active_book';

// All the reducers for the application is combined here to create application state
const rootReducer = combineReducers({
  books : BookReducer,
  activeBook : ActiveBook

});

export default rootReducer;

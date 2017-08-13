import { combineReducers } from 'redux';
import BookReducer from  './reducers_books';
import ActiveBookReducer from './reducer_active_book';

const rootReducer = combineReducers({
    books: BookReducer,
    activeBook: ActiveBookReducer
});

export default rootReducer;

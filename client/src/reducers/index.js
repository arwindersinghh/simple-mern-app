//THIS is the file we will require in our root index.js 
//where we are passing our reducers into our store.
//import combineReducers and all of the reducers we created.
import { combineReducers } from 'redux'
import { booksReducer } from './bookReducers'
import { authorsReducer } from './authorReducers'





//Exporting our combined reducers
export default combineReducers({
    booksData: booksReducer,        
    authorsData : authorsReducer
})
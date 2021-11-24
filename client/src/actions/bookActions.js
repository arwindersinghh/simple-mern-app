import axios from 'axios';


//ACTIONS
const FETCH_BOOKS = 'FETCH_BOOKS';
const FETCH_BOOK = 'FETCH_BOOK';



//ACTION CREATORS

//because we are using a named export, we need to import it through object destructuring in other places.
//example : import { fetchBooks } from  './actions/bookActions'
export const fetchBooks = () => {
    //with thunk we can now return a function
    return async(dispatch) => {
    const allBooks = (await axios.get("/api/book")).data;

    dispatch({ type: FETCH_BOOKS, payload: allBooks });
    }
}

export const fetchBook = (bookId) => {
    return async(dispatch)=>{
        const book = (await axios.get(`/api/book/${bookId}`)).data

        dispatch({ type: FETCH_BOOK, payload: book })
    }
}


import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { fetchBooks } from '../actions/bookActions';
import { useNavigate } from 'react-router-dom';

//below import if i want to dispatch to store manually without connect.
//import { store } from '../index';


const BooksList = (props) => {
    
    let navigate = useNavigate();

    //destructuring data from prop.books and renaming to allBooks
    const { books:allBooks } = props    
    

    useEffect(() => {
        props.fetchBooks();
    }, [])
    

    //random function showing how to test store.dispatch 
    //without connect function. connect is doing this under the hood.

    // const handleClick = () => {
    //     store.dispatch({
    //         type: "BOOK_SELECTED",
    //         payload: 'test'
    //     })
    // }

    const handleSelectBook = (book) => {        
        navigate(`/singlebook/${book._id}`)
    }
    
    
    
    

    return (
        <div>
            This is my BooksList component being rendered at the /books url
            {allBooks && allBooks.map(book => 
            <ul key={Math.random()}>
                <li onClick={()=>handleSelectBook(book)}>
                    {book.title}
                </li>
            </ul>)}
            {/* Below is a random div I used to test the store.dispatch function for our store. */}
            {/* <div onClick={handleClick}> some other random div </div> */}
        </div>
    )
}


//should return a plain object
const mapStateToProps = (state) => {  
    //filtering out what i want from the state
    //which is provided from our combineReducers      
    return {
        books: state.booksData.books,
        selectedBook: state.booksData.selectedBook
    }
}

const mapDispatchToProps = {
    fetchBooks    
}

export default connect(mapStateToProps, mapDispatchToProps)(BooksList)
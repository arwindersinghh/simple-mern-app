import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { fetchBook } from '../actions/bookActions';
import { useParams } from 'react-router-dom';


const SingleBook = (props) => {

    //hook to get the id off the url
    const params = useParams();
    
    useEffect(() => {
        props.fetchBook(params.id)
        
    }, [])
    
    return (
        <div>
            This is my single book component being rendered at /singlebook/:id
            <p><strong>Book Title : </strong>{props.book.title}</p>
            <p><strong> Author : </strong> {props.book.author && props.book.author.name}</p>
        </div>
    )
}


const mapState = (state) => {
    return {
        book : state.booksData
    }
}
const mapDispatch = {
    fetchBook
}

export default connect(mapState, mapDispatch)(SingleBook)
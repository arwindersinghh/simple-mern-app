

const initialState = {
    books : [],
    selectedBook : {}
}


export const booksReducer = (books=initialState, action) => {    
    if(action.type === 'FETCH_BOOKS') {
    //destructuring everything out of current state and passing in new property 
        return { ...books, books : action.payload }
    }
    if(action.type === 'BOOK_SELECTED') {
        return { ...books, selectedBook : action.payload }
    }     
    if(action.type === 'FETCH_BOOK') {
        return action.payload
    }
    // return books;


    return books
}









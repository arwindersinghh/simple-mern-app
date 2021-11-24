const initialState = {
    authors: [],
    selectedAuthor: null
}

export const authorsReducer = (state=initialState, action) => {
    if(action.type === 'GET_AUTHORS'){
        return {
            ...state, authors : action.authors
        }
    }
    if(action.type === 'GET_AUTHOR'){
        return {
            ...state, selectedAuthor : action.payload
        }
    }

    return state
}
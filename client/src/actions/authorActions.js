import axios from 'axios';



const GET_AUTHORS = "GET_AUTHORS";
const GET_AUTHOR = "GET_AUTHOR";


export const getAuthors = () => {
    return async(dispatch) => {
        const authors = (await axios.get("/api/author")).data

        dispatch({ type: GET_AUTHORS, authors })
    }
}





export const getAuthor = (authorId) => {
    return async(dispatch) => {
        const author = (await axios.get(`/api/author/${authorId}`)).data

        dispatch({ type: GET_AUTHOR, payload: author })
    }
}
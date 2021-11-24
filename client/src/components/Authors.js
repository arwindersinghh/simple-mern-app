import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getAuthors } from '../actions/authorActions';




const Authors = (props) => {

    useEffect(() => {
        props.getAuthors();
    }, [])

    return (
        <div>
            This is my Authors component
            <div>
                {props.authors && props.authors.map(author => {
                    return <p key={author._id}> {author.name} </p>
                })}
            </div>
        </div>
    )
}


const mapState = (state) => {
    return {
        authors : state.authorsData.authors 
    }
}

const mapDispatch = {
    getAuthors
}



export default connect(mapState, mapDispatch)(Authors)
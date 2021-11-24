import React from 'react';
import { Link } from 'react-router-dom';





const App = () => {    
    return (
        <div>
            This is my App.js component being rendered from my Navigation component via BrowserRouter.
            <p><Link to="/books">Go to list of books</Link></p>
            <p><Link to="/authors">Go to list of authors</Link></p>
        </div>        
    )
}

export default App;
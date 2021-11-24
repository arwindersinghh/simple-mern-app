import React from 'react';
import BooksList from './BooksList'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SingleBook from './SingleBook';
import Authors from './Authors';
import App from './App'




const Navigation = () => {    
    return (
        <BrowserRouter>        
        <Routes>       
            <Route path="/" element={<App />}></Route>
            <Route path="/books" element={<BooksList />}></Route>
            <Route path="/singlebook/:id" element={<SingleBook />}></Route>
            <Route path="/authors" element={<Authors />}></Route>
        </Routes>
        </BrowserRouter>                                       
    )
}

export default Navigation;
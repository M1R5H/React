import React, {useContext} from 'react';
import {MovieContext} from './MovieContext'

// movies, setMovies
// useContext, import Moviecontext to retrieve context

const Nav = () => {
    const [movies, setMovies] = useContext(MovieContext)
    return(
        <div className="nav-styling">         
                <h3>Matt Holmes</h3>
                <p>List of Movies: {movies.length}</p>  
                <br>
                </br>             
        </div>
    );

}

export default Nav;
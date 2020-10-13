import React, {useState, createContext} from 'react';

export const MovieContext = createContext();

// MovieContext Provider returns the values for other components
// to use

export const MovieProvider = props => {
    const [movies, setMovies] = useState([
        {
            name: 'Moss and Roy',
            price: '£10',
            id: 123
        },

        {
            name: 'Herbs and Holmes',
            price: '£1,000,000',
            id: 456
        }
    ]);

    return(
        <MovieContext.Provider value={[movies, setMovies]}>
            {props.children}
        </MovieContext.Provider>
    );
}
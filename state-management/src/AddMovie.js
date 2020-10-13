import React, {useState, useContext} from 'react';
import {MovieContext} from './MovieContext';


const AddMovie = () => {

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [movies, setMovies] = useContext(MovieContext);

    const updateName = e => {
        setName(e.target.value) // Input text
    };

    const updatePrice = e => {
        setPrice(e.target.price);
    }
    
    const addMovie = e => {
        e.preventDefault()
        setMovies(prevMovies => [...prevMovies, { name: name, price: price }]); // 3 dots - makes a copy of the array of object
    };

    return(
        <form onSubmit={addMovie}>
            <input type="text" name="name" value={name} onChange={updateName}/>
            <input type="text" name="price" value={price} onChange={updatePrice}/>            
            <button>submit</button>
        </form>
    )
}

export default AddMovie;

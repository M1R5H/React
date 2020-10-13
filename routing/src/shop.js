import React, {useState, useEffect} from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Shop() {

  useEffect(() => {
    fetchItems()
  },[]);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch(
      'https://api.coinranking.com/v1/public/coins'
      );

    const items = await data.json();
    console.log(items.data.coins);
    setItems(items.data.coins);
  }
 
  return (
    <div>
        <h1>
            {items.map(item => (
              <h1 key={item.uuid}>
              <Link to={`/shop/${item.id}`}>{item.name}</Link>
              </h1>
            ))}
        </h1>
    </div>
  );
}

export default Shop;
 
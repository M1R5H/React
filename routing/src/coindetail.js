import React, {useState, useEffect} from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Item({ match }) {

  useEffect(() => {
      fetchItem();
      console.log(match);
  },[]);

  

  const [item, setItem] = useState([]);
 
  const fetchItem = async () => {
      const fetchItem = await fetch(`https://api.coinranking.com/v1/public/coin/${match.params.id}`);
      const item = await fetchItem.json();
      setItem(item);
      console.log(item);

    //   setItem(item.data.coins);
  }



  



  return (
    <div>
        {/* <h1>{item.status}</h1> */}
        <h1 className="Amy">Hi Amy</h1>
    </div>
  );
}

export default Item;
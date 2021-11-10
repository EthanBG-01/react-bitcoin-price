import logo from './logo.svg';
import './App.css';
import Axios from "axios";
import React, { useState } from "react";
import { Button } from '@material-ui/core';

function App() {

    const [price, setPrice] = useState();

    async function getPrice () {
        console.log("HERE");
        try {
            const result = await Axios.get("https://api.coinbase.com/v2/prices/spot?currency=USD");
            console.log(result);
            setPrice(result.data.data.amount);
        } catch (err) {
            console.log(err);
        }
    };

  return (
      <div className="App">
          <h1>Get Latest Bitcoin Price</h1>
          <Button color="primary" onClick={() => { getPrice()}}>Get Price</Button>
          {
              price ? <h2>${price}</h2> : <br/>
          }
      </div>
  );
}

export default App;

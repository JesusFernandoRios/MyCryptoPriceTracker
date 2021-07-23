import { useState, useEffect } from 'react';
import axios from 'axios'
import './App.css';


function App() {

  const [coins, setCoins] = useState([])
  useEffect(() => {
    axios
    .get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    .then(res => {
      setCoins(res.data)
      console.log(res.data)})
      .catch( err => console.error(err))

  }, [])

  return (
    <div className="App">
      
      <div className="coin-search">
          <h1>Search A crypto currency</h1>
          <form>
            <input type="text" placeholder="Search" className="search-input"/>
          </form>
      </div>
      
    </div>
  );
}

export default App;

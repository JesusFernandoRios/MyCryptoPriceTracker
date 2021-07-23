import { useState, useEffect } from 'react';
import axios from 'axios'
import './App.css';
import { Coin } from './components/Coin';


function App() {

  const [coins, setCoins] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    axios
    .get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    .then(res => {
      setCoins(res.data)
      console.log(res.data)})
      .catch( err => console.error(err))

  }, [])

  const handleSearch = e => {
    setSearch(e.target.value)
  }

  const filteredCoins = coins.filter( coin =>
    coin.name.toLowerCase().includes(search.toLocaleLowerCase())
  )

  return (
    <div className="App">
      
      <div className="coin-search">
          <h1>Search A crypto currency</h1>
          <form>
            <input type="text" placeholder="Search" className="search-input"/>
          </form>
      </div>

      {filteredCoins.map( coin => {
        return (
          <Coin 
            key={coin.id} 
            name={coin.name} 
            image={coin.image}
            symbol={coin.symbol}
            volume={coin.total_volume}
            price={coin.current_price}
            priceChange={Math.round(coin.price_change_percentage_24h * 100) / 100}
            marketCap={coin.market_cap}
          />
        )
      })}

    </div>
  );
}

export default App;

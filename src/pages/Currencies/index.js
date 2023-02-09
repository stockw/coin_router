import React, { useState } from 'react'
import './index.css';

const Currencies = () => {
  const [currencies, setCurrencies] = useState(
    [
    { name: "Bitcoin", symbol: "BTC" },
    { name: "Litecoin", symbol: "LTC" },
    { name: "Ethereum", symbol: "ETH" },
    { name: "Ethereum Classic", symbol: "ETC" },
    { name: "Stellar Lumens", symbol: "XLM" },
    { name: "Dash", symbol: "DASH" },
    { name: "Ripple", symbol: "XRP" },
    { name: "Zcash", symbol: "ZEC" },
  ]
  )

  console.log(currencies);

  // console.log(JSON.stringify(currencies[item]));

  // list of coins will be an array of JSX
  //[<div>Bitcoin</div>, <div>Litecoin</div>, <div>Etheriun</div>]

  const handleClick = (symbolOfItem) => {
      console.log('handle click executing');
      console.log(symbolOfItem);
  }

  // make these list clickable and take us to that specific coins page

let listOfCoins = currencies.map((item) => {

  return <li onClick={() => handleClick(item.symbol)} key={JSON.stringify(item)}>{item.name}</li>

})

  return (
    <div className='page-container'>
      <h1>Currencies Page</h1>
      <ul id="coin-list-ul">
        {listOfCoins}
      </ul>
        {/*here put list of currencies*/}
      </div>
  )
}

export default Currencies
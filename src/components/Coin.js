import React from 'react'

export const Coin = ({image, priceChange, symbol, price, volume, name, marketCap}) => {
    return (
        <div className='coin-container'>
            <div className="coin-rows">
                <div className="coin-info">
                    <img src={image} alt={name}/>
                    <h1>{name}</h1>
                    <p className="coin-symbol" >{symbol}</p>
                </div>
                <div className="coin-data">
                    <p className="coin-price">${price}</p>
                    <p className="coin-volume">${volume.toLocaleString()}</p>
                    {priceChange < 0 ? 
                        (<p className="coin-percent red">{priceChange.toFixed(2)}</p>)
                        :
                        (<p className="coin-percent green">{priceChange.toFixed(2)}</p>)
                    }

                    <p className="coin-marketCap">
                        Market Cap: ${marketCap.toLocaleString()}
                    </p>
                </div>
            </div>
        </div>
    )
}


import React from 'react'

export const Coin = ({image, coinName, symbol, price, volume, name}) => {
    return (
        <div>
            <div>
                <div>
                    <img src={image} alt={name}/>
                    <h1>{name}</h1>
                    <p>{symbol}</p>
                </div>
                <div>
                    <p>${price}</p>
                    <p>${volume.toLocaleString()}</p>
                </div>
            </div>
        </div>
    )
}


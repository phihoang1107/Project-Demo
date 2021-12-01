import React, { useState } from 'react'

const H5 = () => {
    const [gift, setGift]= useState ()
    const gifts = [
        'honde',
        'yamaha',
        'ab',
        'lambo',
        'cv',
        'lvc',
        'saa',
        'cxz',
        
    ]
    const handleRandom=() => {
        const random1= Math.floor(Math.random()*gifts.length)
        setGift(gifts[random1])
        

    }  
    
    return (
        
        <>
            <h1>lay thuong</h1>
            <button onClick={handleRandom}>random</button>
            <h1>{gift}</h1>
        </>
    )
}

export default H5

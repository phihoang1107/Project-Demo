// rafce
import React from 'react'
import Phone from './Phone'
const Name = ({name,age}) => {
    return (
        <>
         <h1>{name}</h1>   
         <h1>{age}</h1>
         <Phone/>   
        </>
    )
}

export default Name

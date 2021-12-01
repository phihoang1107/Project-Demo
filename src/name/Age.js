import React from 'react'
import Name from './Name'

const Age = ({name, age}) => {
    return (
        <div>
            <h2>{name}</h2>
            <h2>{age}</h2>
            <Name/>
        </div>
    )
}

export default Age

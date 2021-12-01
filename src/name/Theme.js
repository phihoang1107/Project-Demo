import React, { useState } from 'react'

const Theme = () => {

    const [theme, setTheme]= useState(false)
    const handleClick = () =>  {
        setTheme(!theme)
    }
    return (
        <div>
            <button onClick={handleClick}>Theme</button>
            <input type="text" style={theme?{backgroundColor:"black"}:{backgroundColor:"white"}}/>
        </div>
    )
}

export default Theme

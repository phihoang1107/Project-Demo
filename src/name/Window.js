import React, { useState } from 'react'

const Window = () => {

    const [toggle, setToggle] = useState(false)
    const handleClick = () =>  {
        setToggle(!toggle)
    }
    return (
        <div>
            <button onClick={handleClick}>Open</button>
            <input type={toggle?"type":"password"}/>
        </div>
    )
}

export default Window

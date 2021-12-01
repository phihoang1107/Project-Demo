import React, { useState } from 'react'

const Cuaso = () => {
   



    const [toggle, setToggle]= useState(false)
    const handleClick = () =>{
        setToggle (!toggle)
    }    
    return (
        <div>
            <button onClick={handleClick}     >an</button>
            <input type={toggle?"tpye":"password"}/>
        </div>
    )
}

export default Cuaso

import React, { useState } from 'react'

const Image = () => {
    const [toggle, setToggle] = useState(false)
    const handleClick= () =>  {
        setToggle(!toggle)
       
    }
    return (
        <div>
           <button onClick={handleClick}>Xuất hiện</button>
         {           toggle?<img src="https://thuthuatnhanh.com/wp-content/uploads/2019/08/anh-nen-3d-thien-nhien.jpg" width='800' />:""}
        </div>
    )
}

export default Image

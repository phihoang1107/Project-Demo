 import {useEffect, useState} from 'react'
 function Content() {
 
    const [toggle,setToggle]=useState(false)
    const handleClick=()=>{
        setToggle(!toggle)
    }
  return (
      <div>
          <button onClick={handleClick}>hien</button>
       {toggle?  <img src="https://bloganh.net/wp-content/uploads/2021/03/chup-anh-dep-anh-sang-min.jpg" />:""}
      </div>

  )
  }
export default Content
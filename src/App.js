import { useState } from 'react'
// import Job from './name/Job';





function App() {
    const [toggle, setToggle] = useState(true)
    const [inp, setInp] = useState('true')
    const [togglepassword, setTogglepassword] = useState('true')
    const [toggleconfirm, setToggleconfirm] = useState('true')
    
        
   

    const changeValue =() => {

    }
    const handleClick = () =>{
        setTogglepassword(!togglepassword)
        setToggleconfirm(!toggleconfirm)
    }

    return (
        <div style={{ padding: 30}}>
            <div>Alo</div>
            {toggle ?  <input type="text" value={inp} onChange={(e)=>{setInp(e.target.value)}}/> : 
                <div>
                    <div>
                        <input id="firstName" type="text" name="firstname" placeholder="First Name" />
                    </div>
                    <div>
                        <input id="firstName" type="text" name="firstname" placeholder="First Name" />
                    </div>
                    <div>
                        <input id="email" type="email" name="email" placeholder="Email Address" />
                    </div>
                    <div> 
                        <input id="phoneNumber" type="tel" name="phone" placeholder="Phone Number" />
                    </div>
                    <div>
                        <input id="password" type={togglepassword?"type":"password"} name="password" placeholder="Password" />
                        <button onClick={() =>setTogglepassword(!togglepassword)}>Show Password</button>
                       
                    </div>
                    <div>
                        <input id="passwordConfirmation" type="text" name="passwordConfirmation" placeholder="Confirm Password"/>
                        <button>Show ConfirmPassword</button>
                    </div>
                </div>
            }
            
            <button onClick={()=>{
                setToggle(!toggle)
            
            }}>{toggle?'Create Account':'Close'}</button> 
        </div>
    
    )

}
   
export default App;


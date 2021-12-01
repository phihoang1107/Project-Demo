import React, { useState } from 'react'

const Job = () => {
    const [job, setJob] = useState('')
    const [jobs, setJobs] = useState([])
    const handleSubmit = () =>{
        setJobs(prev => [...prev, job])
    }
    
    return (
        <div style={{ padding: 30}}>
        <input type="text" onChange={(e)=>setJob(e.target.value)} value={job}/>
         
         
        
         
         <button onClick={handleSubmit}>ADD</button> 


         <ul>
             {jobs.map((job, index) =>  (
                 <li key={index}>{job}</li>

             ))}
         </ul>   
        </div>
    )
}

export default Job

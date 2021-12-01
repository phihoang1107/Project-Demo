import { useState } from 'react'
import Job from './name/Job';





function App() {
  
  

   
    const [job, setJob] = useState('')
    const [jobs, setJobs] = useState([])
    const handleSubmit = () =>{
        setJobs(prev => {
          const newJobs = [...prev, job]
          const jsonJobs = JSON.stringify(newJobs)
          localStorage.setItem('jobs', newJobs)
          console.log('aloalo')
          return newJobs
        })
        setJob('')
        
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

export default App;
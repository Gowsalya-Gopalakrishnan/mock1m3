import React, { useEffect, useState } from 'react'
import axios from 'axios'

const EmployeeTable = () => {
    const[data,setData] = useState([]);
    const[isLoading,setIsLoading]=useState(false)
    const[error,setError]=useState(null)
    useEffect(()=>{
        setIsLoading(true)
        setError(null)
        axios.get(`http://localhost:3000/employees`)
        .then((res)=>setData(res.data))
        .catch((error)=>error.response? error.response.data:error.message)
        .finally(setIsLoading(false))
    },[])
  return (
    <div>
      {isLoading && <h2>Loading</h2>}
      {error && <p>{error}</p>}
      {data.length  && data.map((ele)=>{
        return(
            <div key={ele.id} className='table'>
            <h2>Name : {ele.name}</h2>
            <p>Designation : {ele.designation}</p>
            <p>Department : {ele.department}</p>
        </div>
        )
        
      })}
    </div>
  )
}

export default EmployeeTable

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import AddEmployeeForm from './AddEmployeeForm';

const EmployeeTable = () => {
    const[data,setData] = useState([]);
    const[isLoading,setIsLoading]=useState(false)
    const[error,setError]=useState(null)
    const[addEmployee,setAddEmployee]=useState(false);
    useEffect(()=>{
        setIsLoading(true)
        setError(null)
        axios.get(`http://localhost:3000/employees`)
        .then((res)=>setData(res.data))
        .catch((error)=>error.response? error.response.data:error.message)
        .finally(setIsLoading(false))
    },[])
  return (
    <>
      {isLoading && <h2>Loading</h2>}
      {error && <p>{error}</p>}
      {data.length  && data.map((ele)=>{
        return(
            <>
            <div key={ele.id} className='table'>
            <h2>Name : {ele.name}</h2>
            <p>Designation : {ele.designation}</p>
            <p>Department : {ele.department}</p>
            <button>Delete</button>
            <button onClick={<AddEmployeeForm/>}>
            {
                addEmployee ? "Close Add Employee Form":"Add Employee"
            }
            </button>

        </div>

            </>
            
        )
        
      })}
    </>
  )
}

export default EmployeeTable

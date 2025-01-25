import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import '../src/styles/EmployeeTable.css'
import EmployeeTable from './components/EmployeeTable'
import AddEmployeeForm from './components/AddEmployeeForm'
import FilterDropdown from './components/FilterDropdown'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <EmployeeTable/>
        {/* <AddEmployeeForm/> */}
        {/* <FilterDropdown/> */}
      </div>
    </>
  )
}

export default App

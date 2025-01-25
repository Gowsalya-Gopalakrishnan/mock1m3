import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import '../src/styles/EmployeeTable.css'
import EmployeeTable from './components/EmployeeTable'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <EmployeeTable/>
      </div>
    </>
  )
}

export default App

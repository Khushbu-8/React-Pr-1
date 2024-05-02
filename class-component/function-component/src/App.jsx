import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Record from './Record'
import {employee}  from "./Data"



function App() {
 
  return (
    <div align="center">
    <Record  employee={employee}/>
    </div>
  )
}

export default App

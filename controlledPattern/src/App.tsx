import { Route, Routes } from "react-router-dom"
import EmployeesList from "./components/EmployeesList"
import RegisterEmployee from "./components/RegisterEmployee"

function App() {

  return (
    <Routes>
       <Route path="/" element={<EmployeesList />} /> 
      <Route path="/add-employee" element={<RegisterEmployee />} />
      <Route path="/edit-employee/:id" element={<RegisterEmployee  />} />
    </Routes>
  )
}

export default App

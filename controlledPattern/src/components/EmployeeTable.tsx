import React from 'react'
import type { Employee } from '../entity/Employee'
import './EmployeeTable.css';

interface EmployeeTableProps {
    employees: Employee[];
    navigate: (path: string) => void;
    onDelete: (id: number) => void;
    
}
const EmployeeTable: React.FC<EmployeeTableProps> = ({employees,onDelete,navigate}) => {
  return (
    <div className="container">
      <div className="header-section">
        <h1 style={{fontSize :"40px", fontWeight:"normal"}}>Employee List</h1>
        <button className="btn-add" onClick={() => navigate('/add-employee')}>
          + Add Employee
        </button>
      </div>

      <table className="employee-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>City</th>
            <th style={{ textAlign: 'center' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td className="emp-name">{employee.name}</td>
              <td>{employee.email}</td>
              <td>{employee.city}</td>
              <td className="actions-cell">
                <button 
                  className="btn-edit" 
                  onClick={() => navigate(`/edit-employee/${employee.id}`)}
                >
                  Edit
                </button>
                <button 
                  className="btn-delete" 
                  onClick={() => onDelete(employee.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default EmployeeTable

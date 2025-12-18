import React from 'react'
import type { Employee } from '../entity/Employee';
import './EmployeeForm.css';

interface EmployeeFormProps {
    employee: Employee;
    onSubmit: () => void;
    isEdit: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const EmployeeForm :React.FC<EmployeeFormProps> = ({employee, onSubmit, onChange,isEdit}) => {
  return (
    <>
  <div className="form-wrapper">
    <div className="form-card">
      <h1 className="form-title">{isEdit ? "Edit Employee" : "Register Employee"}</h1>
      <div className="form-container">
        <div className="input-group">
          <label>Employee Name</label>
          <input type="text" name="name" placeholder="Enter name" value={employee.name} onChange={onChange} />
        </div>
        
        <div className="input-group">
          <label>Employee Email</label>
          <input type="email" name="email" placeholder="Enter email" value={employee.email} onChange={onChange} />
        </div>
        
        <div className="input-group">
          <label>Employee City</label>
          <input type="text" name="city" placeholder="Enter city" value={employee.city} onChange={onChange} />
        </div>
        
        <button type="button" className="submit-btn" onClick={onSubmit}>
          {isEdit ? 'Update ' : 'Register '}
        </button>
      </div>
    </div>
  </div>
</>
  )
}

export default EmployeeForm

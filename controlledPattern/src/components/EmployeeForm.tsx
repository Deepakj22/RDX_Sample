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
                <div className="form-header">
                    <h1 className="form-title">{isEdit ? "Edit Employee" : "Register Employee"}</h1>
                    <p className="form-subtitle">Please fill in the details below</p>
                </div>

                <div className="form-body">
                    <div className="input-group">
                        <label htmlFor="name">Full Name</label>
                        <input 
                            id="name"
                            type="text" 
                            name="name" 
                            placeholder="e.g. John Doe" 
                            value={employee.name} 
                            onChange={onChange} 
                        />
                    </div>

                    <div className="input-group">
                        <label htmlFor="email">Email Address</label>
                        <input 
                            id="email"
                            type="email" 
                            name="email" 
                            placeholder="john@example.com" 
                            value={employee.email} 
                            onChange={onChange} 
                        />
                    </div>

                    <div className="input-group">
                        <label htmlFor="city">City</label>
                        <input 
                            id="city"
                            type="text" 
                            name="city" 
                            placeholder="e.g. New York" 
                            value={employee.city} 
                            onChange={onChange} 
                        />
                    </div>

                    <button type="button" className="submit-btn" onClick={onSubmit}>
                        {isEdit ? 'Update Details' : 'Register '}
                    </button>
                </div>
            </div>
        </div>
</>
  )
}

export default EmployeeForm

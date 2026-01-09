import React, { useEffect, useState } from 'react'
import type { Employee } from '../entity/Employee'
import EmployeeForm from './EmployeeForm';
import { useNavigate, useParams } from 'react-router-dom';
import apiClient from '../api/apiClient';
import { getEmployeeById } from '../services/getEmployeeById';

interface RegisterEmployeeProps {
    onFinalSubmit?: (employee: Employee,mode:"add"|"edit") => void;
}

const RegisterEmployee: React.FC<RegisterEmployeeProps> = ({ onFinalSubmit }) => {
    const { id } = useParams<{ id: string }>(); 
    const navigate = useNavigate();
  const initialState: Employee = {
    id: 0,
    name: '',
    email: '',
    city: ''
  };
  const [employee, setEmployee] = useState<Employee>(initialState);

  useEffect(() => {
   if (!id) {
    setEmployee(initialState)
    return
  }

  const fetchEmployee = async () => {
    try {
      const res = await getEmployeeById(Number(id));
      setEmployee(res)
    } catch (err) {
      console.error(err)
    }
  }

  fetchEmployee()
}, [id]);
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setEmployee(prev=>({...prev, [name]: value}));
    }
    const handleSubmit = async () => {
      const mode = id ? 'edit' : 'add';
  try {
    if (mode === 'add') {
      await apiClient.post<Employee>('/employee', employee);
    } else {
      await apiClient.put<Employee>(`/employee/${id}`, employee);
    }

    onFinalSubmit?.(employee, mode);
    // Dono cases mein navigate karein taaki user ko update dikhe
    navigate('/'); 
    
  } catch (error: any) {
    console.error("Error in submitting employee data: ", error.message);
  }
}
  return (
    <EmployeeForm 
   employee={employee} 
   onSubmit={handleSubmit} 
   onChange={handleChange} 
   isEdit={!!id}/>
  )
}

export default RegisterEmployee

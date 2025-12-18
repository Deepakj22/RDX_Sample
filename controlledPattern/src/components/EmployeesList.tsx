import React, { useEffect, useState } from 'react'
import type { Employee } from '../entity/Employee';
import { getEmployees } from '../services/getEmployees';
import EmployeeTable from './EmployeeTable';
import apiClient from '../api/apiClient';
import { useNavigate } from 'react-router-dom';

const EmployeesList : React.FC = () => {
   const [employees,setEmployes] = useState<Employee[]>([]);
   const [isLoading,setIsLoading] = useState<boolean>(true);
   const [error,setError] = useState<string | null>(null);
   const navigate = useNavigate();

   useEffect(()=>{
   const fetchEmployees = async()=>{
    try{
        const response = await getEmployees();
        setEmployes(response);     
    }
    catch(error : any){
        setError("Failed to fetch employees" + error.message);
    }
    finally{
        setIsLoading(false);
    } 
   }
   fetchEmployees();
   },[]);

   const handleDelete =async (id:number) => {
    await apiClient.delete(`/employee/${id}`);
    setEmployes(prevEmployees => prevEmployees.filter(emp => emp.id !== id));
   }

   if(isLoading){
    return <div>Loading...</div>
   }
   if(error){
    return <div>{error}</div>
   }

  return (
   <EmployeeTable employees={employees} onDelete={handleDelete} navigate={navigate} />
  )
}

export default EmployeesList

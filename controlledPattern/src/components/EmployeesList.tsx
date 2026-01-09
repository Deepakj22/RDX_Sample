import React, { useEffect, useState } from 'react'
import type { Employee } from '../entity/Employee';
import { getEmployees } from '../services/getEmployees';
import EmployeeTable from './EmployeeTable';
import { useNavigate } from 'react-router-dom';
import { removeEmployee } from '../services/removeEmployee';
import IsLoading from '../common/IsLoading';
import ErrorDetail from '../common/ErrorDetail';

const EmployeesList : React.FC = () => {
   const [employees,setEmployees] = useState<Employee[]>([]);
   const [isLoading,setIsLoading] = useState<boolean>(true);
   const [error,setError] = useState<string | null>(null);
   const navigate = useNavigate();
   //const EmployeeTableWithLoading = withLoading(EmployeeTable);
   useEffect(()=>{
   const fetchEmployees = async()=>{
    try{
        const response = await getEmployees();
        setEmployees(response);     
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
    if(!window.confirm("Are you sure you want to delete this employee?")){
        return;
    }
    try{
       await removeEmployee(id);
       setEmployees(prevEmployees => prevEmployees.filter(emp => emp.id !== id));
    }
    catch(error:any){
        setError("Failed to delete employee: " + error.message);
    }
    
   }

   if (isLoading) {
  return <IsLoading message="Fetching employees..." />;
 }
   if (error) {
  return (
    <div className="center-screen">
      <ErrorDetail error={error} />
      <button className="retry-btn" onClick={() => window.location.reload()}>
        🔄 Try Again
      </button>
    </div>
  );
}

  return (
   <EmployeeTable employees={employees} onDelete={handleDelete} navigate={navigate} />
  )
}

export default EmployeesList

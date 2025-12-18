import React, { useEffect, useState } from 'react'
import apiRequest from '../api/apiRequest';
import UserListUI from './UserListUI';
import type { User } from '../api/User';

const UserListContainer : React.FC = () => {
    const [users,setUsers]= useState<User[]>([]);
    const [loading,setLoading]= useState(true);
    const [error,setError]= useState<Error | null>(null);

    useEffect(()=>{
        const controller = new AbortController();

        const fetchUsers = async () =>{
        try{
           setLoading(true); // Ensure loading is true when start
            const response = await apiRequest.get("/users", 
                { signal: controller.signal });
            setUsers(response.data);
        }
       catch(err: any) {
            // Check agar request cancel hui hai toh error set na karein
            if (err.name !== 'CanceledError') {
                console.error("Error fetching users:", err);
                setError(err as Error);
            }
        }
        finally{
            setLoading(false);
        }
      }
        fetchUsers();
        // Cleanup function: Agar user page chhod de toh request cancel ho jaye
      return () => controller.abort();
    },[]);
  return (
    <div>
     <UserListUI users={users} loading={loading} error={error} />
    </div>
  )
}

export default UserListContainer

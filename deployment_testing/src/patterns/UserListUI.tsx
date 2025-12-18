import React from 'react'
import type { User } from '../api/User';


interface UserListUIProps {
  users: User[];
 error: Error | null;
  loading: boolean;
}

const UserListUI : React.FC<UserListUIProps> = ({users, loading ,error}) => {
 if(loading){
    return <div>Loading...</div>
 }
    if(error){
        return <div>Error: {error.message}</div>        
    }
    return (
    <div>
      {users.map((user)=>(
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  )
}

export default UserListUI

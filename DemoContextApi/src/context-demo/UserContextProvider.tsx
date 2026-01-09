import React, { useState } from 'react'
import { UserContext } from './context/UserContext';
import type { IUser } from './IUser';

interface Providerprops{
    children : React.ReactNode;
}
const initialUser: IUser = {
  name: "Bruce Wayne",
  role: "admin",
  theme: "dark"
};

const UserContextProvider : React.FC<Providerprops> = ({children}) => {
    const [user,setUser] = useState<IUser>(initialUser);

  return (
    <UserContext value={{user,setUser}}>
      {children}
    </UserContext>
  )
}

export default UserContextProvider

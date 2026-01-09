import React from 'react'
import { UserContext } from './AppContext'
import type { IDeveloper } from '../IDeveloper';

interface ProviderProps {
  children: React.ReactNode;
}

const developer: IDeveloper = {
  name: "Deepak Jaiswal",
  city: "Cannaught Place",
};
//2.Provider and call usercontext in it.
const UserContextProvider : React.FC<ProviderProps>= ({children}) => {
    
  return (
    <UserContext value={{developer}}>
      {children}
    </UserContext>
  )
}

export default UserContextProvider

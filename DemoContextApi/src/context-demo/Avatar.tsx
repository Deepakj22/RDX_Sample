import React from 'react'
import {useContext} from "react"
import { UserContext } from './context/UserContext';


const Avatar : React.FC = () => {
    const {user,setUser} = useContext(UserContext);

    const toggleTheme =()=>{
        setUser(
            {...user,
            theme: user.theme === "dark" ? "light" : "dark",
        }
    )}
  return (
     <div>
      <p>{user.name}</p>
      <p>Theme: {user.theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  )
}

export default Avatar

import { createContext } from "react";
import type { IUser } from "../IUser";

interface UserContextType{
    user : IUser;
    setUser: React.Dispatch<React.SetStateAction<IUser>>;
}
const defaultUser: IUser = {
  name: "guest",
  role: "Admin",
  theme: "dark",
};
export const UserContext = createContext<UserContextType>({
    user:defaultUser,
    setUser:()=>{}
});
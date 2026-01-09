import { createContext } from "react";
import type { IDeveloper } from "../IDeveloper";

interface UserContextValue {
  developer: IDeveloper
}
//1. created context 
export const UserContext = createContext<UserContextValue | null>(null);
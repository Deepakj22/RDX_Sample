import { useContext } from "react";
import { UserContext } from "./AppContext";

//3.created custom hook for usercontext.
export const useUserContext = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error("useUserContext must be used inside UserContextProvider");
    }
    return context;
} 
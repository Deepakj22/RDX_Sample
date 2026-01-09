import { useContext } from "react";
import { ThemeContext } from "./createContext";

const useTheme = () => {
    return useContext(ThemeContext);
}

export default useTheme;

//Avoids importing useContext + ThemeContext everywhere.
//custom hook to use the ThemeContext.
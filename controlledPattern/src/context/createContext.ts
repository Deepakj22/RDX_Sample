import { createContext } from 'react';

const ThemeContext = createContext({
    theme: 'light',
    toggleTheme: () => { },
});

export { ThemeContext };

//createContext creates a global store.
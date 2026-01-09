import React, {createContext} from 'react'

interface CounterContextType {
    count: number;
    setCount: React.Dispatch<React.SetStateAction<number>>;
}

export const CounterContext = createContext<CounterContextType | null>(null)

interface CounterProviderProps {
    children: React.ReactNode
}

export const CounterProvider : React.FC<CounterProviderProps> = ({children })=>{
    const [count, setCount] = React.useState(0);


    return (
        <CounterContext.Provider value={{count, setCount}}>
            {children}
        </CounterContext.Provider>
    )
}
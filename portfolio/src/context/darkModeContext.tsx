import  React, { createContext, useEffect, useState } from 'react';

export const DarkModeContext = createContext<DarkModeContextType | null>(null);

interface Props {
    children: React.ReactNode
}

const DarkModeProvider: React.FC<Props> = ({ children }) => {
    const jsonValue = localStorage.getItem('darkmode') as string
    const [dark, setDark] = useState<boolean>(JSON.parse(jsonValue) || false)

    const toogleDarkMode = (): void => {
        setDark(!dark)
    }
    
    useEffect(()=> {
        localStorage.setItem('darkmode', JSON.stringify(dark))
    }, [dark])

    return (
        <DarkModeContext.Provider value={{dark, toogleDarkMode}}>
            {children}
        </DarkModeContext.Provider>
    )
}

export default DarkModeProvider;
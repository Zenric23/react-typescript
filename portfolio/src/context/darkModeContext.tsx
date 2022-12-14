import  React, { createContext, useState } from 'react';

export const DarkModeContext = createContext<DarkModeContextType | null>(null);

interface Props {
    children: React.ReactNode
}

const DarkModeProvider: React.FC<Props> = ({ children }) => {
    const [dark, setDark] = useState<boolean>(false)

    const toogleDarkMode = (): void => {
        setDark(!dark)
    }
    

    return (
        <DarkModeContext.Provider value={{dark, toogleDarkMode}}>
            {children}
        </DarkModeContext.Provider>
    )
}

export default DarkModeProvider;
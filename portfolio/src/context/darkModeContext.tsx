import * as React from 'react';

export const DarkModeContext = React.createContext<DarkModeContextType | null>(null);

interface Props {
    children: React.ReactNode
}

const DarkModeProvider: React.FC<Props> = ({ children }) => {
    const [dark, setDark] = React.useState<boolean>(false)

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
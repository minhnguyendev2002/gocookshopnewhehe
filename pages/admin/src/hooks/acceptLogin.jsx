import {useState, createContext} from 'react';

const LoginContext = createContext();

function LoginProvider({children}) {
    const [accept, setAccept] = useState(false)
    
    const value = {
        accept,
        setAccept
    }
    
    return (
        <LoginContext.Provider value={ value }>
            {children}
        </LoginContext.Provider>
    )
}
export { LoginProvider, LoginContext }
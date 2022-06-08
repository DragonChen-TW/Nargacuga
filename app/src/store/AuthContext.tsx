import { useState, createContext } from 'react'

const AuthContext = createContext({
    token: null,
    loggedIn: false,
    login: (token: string) => {},
    logout: () => {},
})

export const AuthContextProvider = (props: any) => {
    const tokenKey = 'NargacugaToken'
    const { children } = props

    const [token, setToken] = useState(localStorage.getItem(tokenKey))

    const loggedIn = Boolean(token)

    const loginHandler = (newToken: string) => {
        setToken(newToken)
        localStorage.setItem(tokenKey, newToken)
    }

    const logoutHandler = () => {
        setToken(null)
        localStorage.removeItem(tokenKey)
    }

    return (
        <AuthContext.Provider
            value={{
                token: token === null ? token : null,
                loggedIn,
                login: loginHandler,
                logout: logoutHandler,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext
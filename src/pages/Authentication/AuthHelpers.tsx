import { createContext, useContext, useEffect, useState } from "react"
import { AuthModel, UserModel } from "../../models/auth"
import { verifyToken } from "./_request"

const AUTH_LOCAL_STORAGE_KEY = 'boiler-solution-key'
const getAuth = (): AuthModel | undefined => {
    if (!localStorage) {
        return
    }

    const lsValue: string | null = localStorage.getItem(AUTH_LOCAL_STORAGE_KEY)
    if (!lsValue) {
        return
    }

    try {
        const auth: AuthModel = JSON.parse(lsValue) as AuthModel
        if (auth) {
            // You can easily check auth_token expiration also
            return auth
        }
    } catch (error) {
        console.error('AUTH LOCAL STORAGE PARSE ERROR', error)
    }
}

const setAuth = (auth: AuthModel) => {
    if (!localStorage) {
        return
    }

    try {
        const lsValue = JSON.stringify(auth)
        localStorage.setItem(AUTH_LOCAL_STORAGE_KEY, lsValue)
    } catch (error) {
        console.error('AUTH LOCAL STORAGE SAVE ERROR', error)
    }
}

const removeAuth = () => {
    if (!localStorage) {
        return
    }

    try {
        localStorage.removeItem(AUTH_LOCAL_STORAGE_KEY)
    } catch (error) {
        console.error('AUTH LOCAL STORAGE REMOVE ERROR', error)
    }
}

export function setupAxios(axios: any) {
    axios.defaults.headers.Accept = 'application/json'
    axios.interceptors.request.use(
        (config: { headers: { Authorization: string } }) => {
            const auth = getAuth()
            if (auth && auth.api_token) {
                config.headers.Authorization = `Bearer ${auth.api_token}`
            }

            return config
        },
        (err: any) => Promise.reject(err)
    )
}

type AuthContextProps = {
    auth: AuthModel | undefined
    saveAuth: (auth: AuthModel | undefined) => void
    currentUser: UserModel | undefined
    setCurrentUser: React.Dispatch<React.SetStateAction<UserModel | undefined>>
    logout: () => void
}

const initAuthContextPropsState = {
    auth: getAuth(),
    saveAuth: () => { },
    currentUser: undefined,
    setCurrentUser: () => { },
    logout: () => { },
}

const AuthContext = createContext<AuthContextProps>(initAuthContextPropsState)

export const useAuth = () => {
    return useContext(AuthContext)
}

export const AuthProvider: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
    const [auth, setPrivateAuth] = useState<AuthModel | undefined>(getAuth())
    const [currentUser, setCurrentUser] = useState<UserModel | undefined>()
    const saveAuth = (auth: AuthModel | undefined) => {
        setPrivateAuth(auth)
        if (auth) {
            setAuth(auth)
        } else {
            removeAuth()
        }
    }

    const logout = () => {
        saveAuth(undefined)
        setCurrentUser(undefined)
    }

    return (
        <AuthContext.Provider value={{ auth, saveAuth, currentUser, setCurrentUser, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export const AuthInit: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
    const { auth, currentUser, logout, setCurrentUser } = useAuth()

    useEffect(() => {
        const requestUser = async (accessToken: string) => {
            try {
                if (!currentUser) {
                    const { data } = await verifyToken(accessToken);
                    if (data) {
                        setCurrentUser(data)
                    }
                }
            } catch (error) {
                console.error(error)
                if (currentUser) {
                    logout()
                }
            }
        }

        if (auth && auth.access_token) {
            requestUser(auth.access_token)
        } else {
            logout()
        }
    }, []);

    return  <>{children}</>
}
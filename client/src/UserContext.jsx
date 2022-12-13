import { createContext, useState, useEffect } from 'react';

const UserContext = createContext();

export function UserContextProvider({ children }) {
    const [user, setUser] = useState({
        email: '',
        token: '',
        username: 'guest',
        _id: ''
    })

    useEffect(() => {
        const loggedIn = JSON.parse(localStorage.getItem('user'))
        if (loggedIn) {
            setUser(loggedIn)
        }
    }, [])

    return <UserContext.Provider
        value={{ user, setUser }}
    >
        {children}
    </UserContext.Provider>
}

export default UserContext;
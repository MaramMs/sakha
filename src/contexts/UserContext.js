'use client'
const { createContext, useState, useEffect } = require("react");

export const UserContext = createContext();

export function UserProvider({children}) {
    const [user,setUser] = useState({
        email:'',
        password:''
    });
    return (
        <UserContext.Provider value={{user,setUser}}>
            {children}
        </UserContext.Provider>
    )
}

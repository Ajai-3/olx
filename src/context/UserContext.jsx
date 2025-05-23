import React, { createContext, useContext, useEffect, useState } from "react"
import { auth } from "../config/firebase"
import { onAuthStateChanged } from "firebase/auth"

const UserContext = createContext()

export const useUser = () => {
   return useContext(UserContext)
}

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
            setLoading(false)
        })

        return () => unsubscribe();
    }, [])

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {!loading && children}
        </UserContext.Provider>
    )
}
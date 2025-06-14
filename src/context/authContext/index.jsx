import { useContext, useState } from "react"
import { useEffect } from "react";
import { auth } from "../../firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";
import React from "react";

const AuthContext = React.createContext()

export function useAuth(){
    return useContext(AuthContext);
}

export function AuthProvider({children}){
    const [currentUser, setCurrentUser] = useState(null);
    const [loggedIn, setUserLoggedIn] = useState(false); 
    const [loading, setLoading] = useState(true);

    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, initializeUser);
    }, [])

    async function initializeUser(user){
        if (user){
            setCurrentUser({... user});
            setUserLoggedIn(true);
        }
        else{
            setCurrentUser(null);
            setUserLoggedIn(false);
        }
        setLoading(false);
    }

    const value = {
        currentUser,
        loggedIn,
        loading
    }

    return (
        <AuthContext.Provider value = {value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}
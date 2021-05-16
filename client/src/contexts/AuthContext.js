import React, { useContext, useState, useEffect} from 'react'
import { Auth } from '../firebase'

const AuthContext = React.createContext();

export function useAuth() {
 return useContext(AuthContext)
}


const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)

    function signup(email, password){
        return Auth.createUserWithEmailAndPassword(email, password)
    }
    
    function login(email, password){
        return Auth.signInWithEmailAndPassword(email, password)
    }

    function logout(){
        return Auth.signOut()
    }

    useEffect(() => {
       const unsubsribe =  Auth.onAuthStateChanged(user => {
           setCurrentUser(user)
           setLoading(false)
        })

        return unsubsribe
    }, [])

    const value = {
        currentUser,
        signup,
        login,
        logout
    }
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}

export default AuthProvider

import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword, updateProfile,  } from "firebase/auth";
import { app } from "../Provider/firebase.config";
export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();
    const [loading,setLoading] = useState(true);
    //console.log(user,loading)
    const AuthRegister = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    };
    const logOut = () =>
        {
            setLoading(true);
            return signOut(auth);
        }
  
    const loginUser = (email,password) =>
        {
            setLoading(true);
            return signInWithEmailAndPassword(auth,email,password);
        };
     const updatedProfileInfo = (updatedInfo) =>
        {
            return updateProfile(auth.currentUser,updatedInfo);
        }
    const AuthInfo = {
        user,
        setUser,
        AuthRegister,
        logOut,
        loginUser,
        updatedProfileInfo,
        loading
    };
      useEffect(() => {
        const stateControl = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        }
        );
        return ()=>
                {
                    stateControl();
                }
    }, [])
    return (
        <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
    );
}

export default AuthProvider;
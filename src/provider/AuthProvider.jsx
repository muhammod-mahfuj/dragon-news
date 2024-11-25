import { createContext, useEffect, useState } from "react";
import auth from '../firebase/firebase.config'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const AuthContext = createContext();
 

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    console.log(user)

    const createNewUser =  (email,password) => {
      return createUserWithEmailAndPassword(auth, email, password)
    }
    const logIn = (email,password) => {
      return signInWithEmailAndPassword(auth,email,password);
    }
    const logOut = () => {
      return signOut(auth);
    } 
      const contextInfo = {
        user,
        setUser,
        createNewUser,
        logIn,
        logOut
      };
    useEffect(() => {
      const unsubcribe = onAuthStateChanged(auth,(currentUser) => {
        setUser(currentUser);
      });
      return  () => {
        unsubcribe();
      }
    },[])

    return (
        <AuthContext.Provider value={contextInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
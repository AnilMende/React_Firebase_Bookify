import { createContext, useContext, useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import {getAuth, 
       createUserWithEmailAndPassword
      ,signInWithEmailAndPassword,
      GoogleAuthProvider,
      signInWithPopup,
      onAuthStateChanged} 
    from "firebase/auth";
// creating a context
const FirebaseContext = createContext(null);

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfytabbgaRrgXI-gnbIAZDhGtQKFAFmkI",
  authDomain: "bookify-6bfae.firebaseapp.com",
  projectId: "bookify-6bfae",
  storageBucket: "bookify-6bfae.firebasestorage.app",
  messagingSenderId: "783697929275",
  appId: "1:783697929275:web:6f90496b230e130e37681e"
};

// Initialize firebase app
const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);

// To access contexts state
export const useFirebase = () => useContext(FirebaseContext);

const googleprovider = new GoogleAuthProvider();


export const FirebaseProvider = (props) => {

    const [user, setUser] = useState(null);

    useEffect(() => {
        onAuthStateChanged(firebaseAuth, (user) => {
            // if there is user
            if(user){
                setUser(user);
            }
            else{
                setUser(null);
            }
        })
    },[])

  
    const signUpUser = (email, password) => 
        createUserWithEmailAndPassword(firebaseAuth, email, password)

    const signInUser = (email, password) => 
        signInWithEmailAndPassword(firebaseAuth, email, password);

    const signInWithGoogle = () => 
        signInWithPopup(firebaseAuth, googleprovider);

    const isLoggedIn = user ? true : false;

    return(
        <FirebaseContext.Provider value={{signUpUser, 
                                          signInUser, 
                                          signInWithGoogle,
                                          isLoggedIn}}
        >
            {props.children}
        </FirebaseContext.Provider>
    )
}
import { createContext, useContext } from "react";
import { initializeApp } from "firebase/app";

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

// To access contexts state
export const useFirebase = () => useContext(FirebaseContext);


export const FirebaseProvider = (props) => {
    return(
        <FirebaseContext.Provider>
            {props.children}
        </FirebaseContext.Provider>
    )
}
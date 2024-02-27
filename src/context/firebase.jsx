import { createContext, useContext } from "react";
import { initializeApp } from 'firebase/app';
import { getAuth,createUserWithEmailAndPassword } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyC3-30gim8vF8Mig-Mzey8_OF9ZLEu3Llk",
  authDomain: "reactwithrirebase.firebaseapp.com",
  projectId: "reactwithrirebase",
  storageBucket: "reactwithrirebase.appspot.com",
  messagingSenderId: "959625072439",
  appId: "1:959625072439:web:d4e39ccb2c8336e9d754b2",
  measurementId: "G-Q3EG5ZYK4B",
  databaseURL: "https://reactwithrirebase-default-rtdb.firebaseio.com/",

};

const firebaseApp= initializeApp(firebaseConfig)
const firebaseAuth = getAuth(firebaseApp);
const FirebaseContext = createContext(null);

export const useFirebase = () => {
    return useContext(FirebaseContext);
} 


export const FirebaseProvider = (props)=>{

 const signupUserWithEmailAndPassword = (email, password) => {
        return createUserWithEmailAndPassword(firebaseAuth, email, password)
    }

 return (
        <FirebaseContext.Provider value={{signupUserWithEmailAndPassword}}>
            {props.children}
        </FirebaseContext.Provider>
    )
}
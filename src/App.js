import { useEffect, useState } from 'react';
import './App.css';
import { useFirebase } from './context/firebase';
import Signup from './pages/signUp';
import { getAuth, onAuthStateChanged,signOut } from 'firebase/auth';
import { app } from '../src/firebase';
import Login from './pages/Login';
import {getFirestore,collection,addDoc} from 'firebase/firestore';


const auth = getAuth(app);
const db = getFirestore(app);

function App() {
  const firebase= useFirebase();
  console.log(firebase);
  const [user, setUser] = useState(null);
  console.log("users"+user);
  useEffect(() => {
    onAuthStateChanged (auth, (user) => {
      if (user) {
        debugger;
        console.log('User is signed in' + user);
      } else {
        console.log('User is signed out');
        return (
               <div className="app">
                 <Signup/>
               <Login/>
              </div>
            )
      }
    });
  }, []);


  // add Data
  const addData = async  () => {

    const docRef = await addDoc(collection(db, "city"), {
      name: "Lahore",
      country: "Pakistan",
      pinCode: 1815
    });
    console.log("Document written with ID: ", docRef.id + "Data added" + docRef);
  }

  const subData = async  () => {

    const docRef = await addDoc(collection(db, 'city/kZ1jA8umdmNxgHOYrOaf/places'), {
      name: "Defenec",
      description: "It it the best society in Lahore",
  
    });
    console.log("Document written with ID: ", docRef.id + "Data added" + docRef);
  }
  
 

  return (
    <div className="app">
      <h1> User is login </h1>
      <button onClick={()=>signOut}> logout</button>
      <button onClick={addData}> Add Data</button>
      <button onClick={subData}> Sub Data</button>
     </div>
  );
}

export default App;

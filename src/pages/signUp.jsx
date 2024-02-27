import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import React, { useState } from 'react';
import { app } from '../../src/firebase';
import { useFirebase } from '../context/firebase';


// instance for my firebase database
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const firebase= useFirebase();
  console.log(firebase);

  const signUpWithGoggle = ()=>{
    signInWithPopup(auth, provider)

  }




  return (
    <div style={{margin:'20px'}}>
      <h1>Firebase React js Signup</h1>  
      <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        
       <button onClick={()=>{
        firebase.signupUserWithEmailAndPassword(email,password)
       }
      }>Signup</button>
      <br />
      <h1>Continue  with goggle </h1>  
        <button style={{margin:'20px'}} onClick={signUpWithGoggle}> Signin with goggle</button>
    </div>
  );
}

export default Signup;

import React, { useState } from 'react';
import { app } from '../../src/firebase';
import { signInWithEmailAndPassword, getAuth } from 'firebase/auth';

// instance for my firebase database
const auth = getAuth(app);

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  // Function to handle form submission
  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    try {
      // Call the signIn function with email and password
      await signInWithEmailAndPassword(auth, email, password);
      // Logged in successfully
      console.log('User logged in successfully');
      // Clear input fields
      setEmail('');
      setPassword('');
      setError(null);
    } catch (error) {
      // Handle errors
      console.error(error);
      setError(error.message);
    }
  };

  return (
    <div className="app">
      <h1>Firebase React js Login</h1>
      <form onSubmit={handleLogin}>
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
        {error && <p className="error">{error}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;

// src/App.js
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, firestore } from "./firebaseConfig";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import ChatRoom from "./ChatRoom";

function App() {
  const [user] = useAuthState(auth);
  console.log(user);
  return (
    <div className="App">
      <header>
        <h1>Chat App</h1>
        {user ? (
          <button onClick={() => auth.signOut()}>Sign out</button>
        ) : (
          <SignIn />
        )}
      </header>
      <section>{user ? <ChatRoom /> : <SignIn />}</section>
    </div>
  );
}

function SignIn() {
  const signInWithGoogle = async () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      // The user is signed in with Google.
      const user = result.user;
      console.log(`Successfully signed in with Google: ${user.displayName}`);
    } catch (error) {
      // Handle the error if sign-in fails.
      console.error("Google Sign-In Error: ", error);
    }
  };

  return (
    <button onClick={signInWithGoogle}>Sign in with Google</button>
  );
}

export default App;

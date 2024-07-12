import { useState , useEffect} from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import "./Auth.css"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID
};


const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

export default function Auth() {
  const [user, setUser] = useState(null);

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
      // localStorage.setItem('user', JSON.stringify(result.user))
    localStorage.setItem('user', JSON.stringify(result.user));

    } catch (error) {
      console.error(error);
    }
  };


  useEffect(() => {
    const loggedInUser = localStorage.getItem('user');
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    }
  }, []);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setUser(null);
    localStorage.removeItem('user');

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div >
      {user ? (
        <div>
          <p>Welcome, {user.displayName}!</p>
          <button onClick={handleSignOut}>Sign Out</button>
        </div>
      ) : (
        <div>
          <div>Login with your gmail account!</div>
          <button className="sign-in-button" onClick={signInWithGoogle}>google</button>

        </div>
      )}
    </div>
  );
}

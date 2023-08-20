import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";


const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STRORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MESSAGING_SENDER_ID
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app)
// * auth with googole
export const signInWithGoogle = async () => {
  const googleProvider = new GoogleAuthProvider();
  await signInWithPopup(auth, googleProvider)
  // .then((res)=>{
    // sign in successful
    // console.log( res.user);
  // })
}
// * Sign out 

export const handleSignOut = async () => {
  await signOut(auth)
    .then(() => {
      // sign out successful
      console.log("Sign-out successful.");
    })
    .catch((error) => {
      console.log("An error happened:", error);
    });
};

export default app;
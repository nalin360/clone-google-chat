import { useEffect, useState } from 'react';
import { auth } from './config/firebase';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import { BrowserRouter as Router } from 'react-router-dom';
// import { Routes, Route } from 'react-router-dom';
import ChatRoom from './pages/ChatRoom';
import SignIn from './pages/SignIn';
import SignOut from './pages/SignOut';
import './App.css';

function App() {

  const [user, setuser] = useState(null)
  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      // const { displayName, email } = user;
      setuser(user)
    })
  }, [])


  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  return (
    <div className="App">
      <header>
        <h1>⚛️🔥💬</h1>
        <SignOut />
      </header>

      <section>
          {user ? <ChatRoom /> : <SignIn />}
        </section>
      </div>
  );
}

export default App;

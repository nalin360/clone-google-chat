import { useEffect, useState } from 'react';
import './App.css';
import { auth } from './config/firebase';
import ChatRoom from './pages/ChatRoom';
import SignIn from './pages/SignIn';
import SignOut from './pages/SignOut';
import { useAuthState } from 'react-firebase-hooks/auth';


function App() {
  const [hiuser, setHiUser] = useState(null)
  const [user,loading] = useAuthState(auth);
  useEffect(() => {
    if (user) {
      setHiUser(user.emailVerified);
    }
  }, [user]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <header>
        <h1>⚛️🔥💬</h1>
        <SignOut />
      </header>

      <section>
        {hiuser ? <ChatRoom /> : <SignIn />}
      </section>
    </div>
  );
}

export default App;

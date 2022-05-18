import React, { useState, useEffect } from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import * as C from './styles/App';

import { auth, db } from "./services/firebase";
import Login from './components/login/index';
import Loading from './components/loading/index';
import Sidebar from './components/sidebar';

export default function App() {
  const [ user, loading ] = useAuthState(auth);
  const [ userChat, setUserChat ] = useState(null);

  useEffect(() => {
    if(user) {
      db.collection("users").doc(user.uid).set({
        email: user.email,
        photoUrl: user.photoURL,
      })
    }

  }, [user]);

  if (loading) return <Loading />;

  if (!user) return <Login />;

  return (
    <C.Container>
      <Sidebar userChat={ userChat } setUserChat={ setUserChat } />
    </C.Container>
  )
}

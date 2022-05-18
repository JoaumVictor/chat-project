import React from 'react';
import * as C from "./style.js";
import { auth, provider } from "../../services/firebase";

export default function Login() {
  const handleSignin = () => {
    auth.signInWithPopup(provider).catch(alert);
  };
  return (
    <C.Container>
      <C.Button onClick={ handleSignin }>Login com Google</C.Button>
    </C.Container>
  )
}

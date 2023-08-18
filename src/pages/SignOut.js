import React from 'react'
import { auth, handleSignOut } from '../config/firebase'

function SignOut() {
  // console.log(auth.currentUser);
  return auth.currentUser &&  (
    <>
    <button onClick={handleSignOut}>SignOut</button>
    </>
  )
}

export default SignOut
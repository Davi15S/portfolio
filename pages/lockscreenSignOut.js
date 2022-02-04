import React from 'react';
import LockscreenSignIn from '../components/LockscreenSignIn';

function lockscreenSignOut() {
  return(
      <LockscreenSignIn push={"/"} text={"Signing out..."}/>
  );
}

export default lockscreenSignOut;

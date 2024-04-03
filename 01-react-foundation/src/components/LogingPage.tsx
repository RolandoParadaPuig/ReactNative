import React, { useEffect } from 'react'
import { useAuthStore } from '../store/auth.store'

export const LogingPage: React.FC = () => {
  const authStatus = useAuthStore((state) => state.status);
  const user = useAuthStore((state) => state.user);
  const login = useAuthStore((state) => state.login);
  const logout = useAuthStore((state) => state.logout);


  useEffect(() => {
    if (authStatus === 'checking') {
      setTimeout(() => logout(), 1500)
    }
  }, [authStatus, logout]);

  if (authStatus === 'checking') {
    return (
      <h3>Loading...</h3>
    )
  }
  return (
    <>
      <h3>Loging Page</h3>
      {(authStatus === 'authenticated') ? 
      <div>Authenticated as: {JSON.stringify(user, null, 2)}</div> : 
      <div>Not authenticated</div>
      }

      {
        (authStatus === 'authenticated') ?
        <button onClick={() => logout()}>Logout</button> :
        <button onClick={() => login('rolando@gmail.com', 'password')}>Login</button>
      }
    </>
  )
}

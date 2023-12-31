import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const LogOutButton = () => {

  const {logout, isAuthenticated} = useAuth0()

  return (
    isAuthenticated && (
      <button className='text-white logBut' onClick={() => logout()}>
        Sign Out
      </button>
    )    
  )
}

export default LogOutButton

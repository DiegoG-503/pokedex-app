import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const LogoutButton = () => {
    const { logout } = useAuth0();
  return (
    <div>
        <button className='btn btn-danger' onClick={() => logout({ returnTo: window.location.origin })}>Log Out</button>
    </div>
  )
}

export default LogoutButton
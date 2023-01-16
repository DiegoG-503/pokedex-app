import { useAuth0 } from '@auth0/auth0-react'
import { React } from 'react'
import Navbar from './Navbar';
import Pokemones from './Pokemones'

export default function Home() {
    const { isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
      return <div>Loading...</div>
    }

    return (
    isAuthenticated && (
        <div>
          <Navbar /> 
          <Pokemones />
        </div>
    )
  )
}


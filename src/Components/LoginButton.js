import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import pokelogo from '../assets/img/pokelogo.png';
import poke from '../assets/img/pokeapi.png';

const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();
  return (
    <div>
        <img src={pokelogo} width='100' alt='PokeApiLogo' />
        <img src={poke} width='300' alt='PokeImg' />
        <button className='btn btn-success' onClick={() => {loginWithRedirect()}}>Log In</button>
    </div>
  )
}

export default LoginButton
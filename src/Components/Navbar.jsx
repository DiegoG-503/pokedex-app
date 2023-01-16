import { React, useState} from 'react'
import LogoutButton from './LogoutButton'
import { useAuth0 } from '@auth0/auth0-react'
import pokelogo from '../assets/img/pokelogo.png';
import SearchBar from './SearchBar';

export default function Navbar() {

    const { user } = useAuth0();
    const [pageNumber, setPageNumber] = useState(0);
    let url = `https://pokeapi.co/api/v2/pokemon/?page=${pageNumber}`;
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="index.html"><img src={pokelogo} alt="Pokelogo" width="30" class="d-inline-block align-text-top" /> PokeApi</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="index.html">Inicio</a>
                    </li>
                </ul>
                <ul className='navbar-nav me-auto'><SearchBar url={url} /></ul>
                <ul className='navbar-nav'>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Perfil
                    </a>
                    <ul className="dropdown-menu dropdown-menu-end text-center">
                        <li className='dropdown-item'><img src={user.picture} alt={user.name} /></li>
                        <li className='dropdown-item'><h2>{user.name}</h2></li>
                        <li className="dropdown-item"><p>{user.email}</p></li>
                        <li className='dropdown-item'><LogoutButton /></li>
                    </ul>
                    </li>
                </ul>
                
                </div>
            </div>
        </nav>
    </div>
  )
}

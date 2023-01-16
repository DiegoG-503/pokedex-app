import axios from 'axios';
import React from 'react'
import { useContext } from 'react';
import { useRef } from 'react'
import { AppContext } from '../Services/Provider';

export default function SearchBar({url}) {

  const name = useRef(null);
  const [dataApi, setDataApi] = useContext(AppContext);

  const search = async () => {
    const nameValue = name.current.value;

    await axios.get(url)
      .then(response => {
        const charactersByName = response.data.results.filter((e) => e.name === nameValue);

        if (charactersByName.length !== 0) {
          setDataApi(charactersByName);
        }

        if (charactersByName.length === 0) {
          setDataApi(response.data.results);
        }
      })
  }

  return (
    <div>
        <form className="navbar-nav me-auto">
            <input className="form-control me-2" ref={name} type="text" placeholder="Ingresa el nombre..." aria-label="Search" />
            <button className="btn btn-outline-success" onClick={() => search()}>Buscar</button>
        </form>
    </div>
  )
}

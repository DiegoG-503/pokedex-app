import { useState } from 'react';
import { createContext } from 'react'

export const AppContext = createContext();

const Provider = (props) => {
    const [dataApi, setDataApi] = useState();
  return (
    <div>
        <AppContext.Provider value={[dataApi,setDataApi]}>
            {props.children}
        </AppContext.Provider>
    </div>
  )
}

export default Provider
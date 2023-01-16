
import { useAuth0 } from '@auth0/auth0-react';
import './App.css';
import Home from './Components/Home';
import LoginButton from './Components/LoginButton';

function App() {
  const { isAuthenticated } = useAuth0();
  return (
    <div className="App">
        {
          isAuthenticated ? <Home /> : <LoginButton />
        } 
    </div>
  );
}

export default App;

// import logo from './logo.svg';
import NavBar from './components/Navbar/NavBar';
import LoginPage from './components/LoginPage/LoginPage';
import { useContext } from 'react';
import AuthContext from './components/Store/AuthContext';
// import { Route } from 'react-router-dom';

function App() {

 const authCtx = useContext(AuthContext);

  return (
    <div>
       <NavBar />
{authCtx.isLoggedIn && <h1>Welcome to Expense tracker</h1>}
     {!authCtx.isLoggedIn && <LoginPage />}
    </div>
  );
}

export default App;

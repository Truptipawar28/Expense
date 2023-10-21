// import logo from './logo.svg';
import NavBar from './components/Navbar/NavBar';
import LoginPage from './components/LoginPage/LoginPage';
import { useContext } from 'react';
import AuthContext from './components/Store/AuthContext';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './components/Page/Home';
import UserProfile from './components/UserProfile/UserProfile';
// import { Route } from 'react-router-dom';

function App() {

 const authCtx = useContext(AuthContext);
 const isLoggedIn = authCtx.isLoggedIn;

  return (
    <div className='App'>
       <NavBar />
{/* {authCtx.isLoggedIn && <h1>Welcome to Expense tracker</h1>}
     {!authCtx.isLoggedIn && <LoginPage />} */}

<Routes>
      <Route path='/' exact element={<Navigate replace to='/home' />} />
      <Route path='/home' element={<Home />} />

      <Route 
      path='/profile'
      element={
        isLoggedIn ? <UserProfile /> : <Navigate to='/login' replace />
      }
      />
      <Route path='/login' element={<LoginPage />} />
     </Routes>
    </div>
  );
}

export default App;

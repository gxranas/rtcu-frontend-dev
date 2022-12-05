import './App.css';
import { useState , useEffect } from 'react';
import {BrowserRouter as Router, Routes, Route , Navigate} from 'react-router-dom'
import Login from './pages/authentication/Login';
import Signup from './pages/authentication/Signup';
import ForgotPassword from './pages/authentication/ForgotPassword';
import ResetPassword from './pages/authentication/ResetPassword';
import ChooseLogin from './pages/authentication/ChooseLogin';
import ChooseSignup from './pages/authentication/ChooseSignup';
import ManageAccount from './pages/account/ManageAccount';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import ErrorPage from './pages/ErrorPage';
import Profile from './pages/account/Profile';
import UpdateName from './pages/account/UpdateName';
import UpdateBirthday from './pages/account/UpdateBirthday';
import UpdateEmail from './pages/account/UpdateEmail';
import UpdateGender from './pages/account/UpdateGender';
import UpdatePassword from './pages/account/UpdatePassword';
import UpdatePhone from './pages/account/UpdatePhone';
import AddAddress from './pages/account/AddAddress';
import Addresses from './pages/account/Addresses';

function App() {

  const [user,setUser] = useState(null);
useEffect(()=>{
  const getUser = async () =>{
  await  fetch("http://localhost:3001/users/login/success",{
      method: 'GET',
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
      },
    }).then((response)=>{
      if(response.status ===  200) return response.json();
      throw new Error("Authentication failed");
    }).then(resObject=>{
    setUser(resObject.user);
    }).catch(err=>{
      console.log(err);
    })
  }
 getUser();
    
}, [])

  return (
    <div className="App">
      <Router>
        <Header user={user}/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path='/login' element={ <ChooseLogin/>}/>
          <Route path='/login/credential' element={ <Login/>}/>
          <Route path='/signup' element={<ChooseSignup/>}/>
          <Route path='/signup/credential' element={ <Signup/>}/>
          <Route path='/forgot' element={<ForgotPassword/>}/>
          <Route path='/resetpassword' element={ <ResetPassword/>}/>
          <Route path='manage-account' element={user ? <ManageAccount/> : <Navigate to='/login'/>}> 
            <Route path='profile' element={user ? <Profile user={user}/> : <Navigate to='/login'/>}/>
            <Route path="profile/update/name" element={user ? <UpdateName/> : <Navigate to='/login'/>}/>
            <Route path="profile/update/email"element={user ? <UpdateEmail/> : <Navigate to='/login'/>} />
            <Route path="profile/update/phone" element={user ? <UpdatePhone/> : <Navigate to='/login'/>} />
            <Route path="profile/update/password" element={user ? <UpdatePassword/> : <Navigate to='/login'/>} />
            <Route path="profile/update/gender" element={user ? <UpdateGender/> : <Navigate to='/login'/>} />
            <Route path="profile/update/birthday" element={user ? <UpdateBirthday/> : <Navigate to='/login'/>} />
            <Route path="profile/addresses" element={user ? <Addresses user={user}/> : <Navigate to='/login'/>} />
            <Route path="profile/add/addresses" element={user ? <AddAddress/> : <Navigate to='/login'/>} />
          </Route>
          <Route path="*" element={<ErrorPage/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;

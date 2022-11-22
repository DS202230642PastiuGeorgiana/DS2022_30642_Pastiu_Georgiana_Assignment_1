
import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';

import ListUsersComponent from './components/ListUsersComponent';
import CreateUserComponent from './components/CreateUserComponent';
import ListDevicesComponent from './components/ListDevicesComponent';
import CreateDeviceComponent from './components/CreateDeviceComponent';
import DeleteDeviceComponent from './components/DeleteDeviceComponent';
import DeleteUserComponent from './components/DeleteUserComponent';
import UpdateUserComponent from './components/UpdateUserComponent';
import UpdateDeviceComponent from './components/UpdateDeviceComponent';
import RegisterUser from './components/RegisterUser';
import Login from './LogIn';
import HeaderComponentAdmin from './components/HeaderComponentAdmin';
import HeaderComponentClient from './components/HeaderComponentClient';


function App() {
  return (
 
    <div>
      <Router>
        <div className='container'> 
    <HeaderComponent/>
    <div className="container">
      <Routes> 
        <Route path='/' element={<Login />}> </Route>
        <Route path='/register' element={<RegisterUser />}> </Route>
        <Route path='/admin' element={<HeaderComponentAdmin />}> </Route>
        <Route path='/client' element={<HeaderComponentClient/>}></Route>
        <Route path='/users' element={<ListUsersComponent />}> </Route>
        <Route path='/create-user' element={<CreateUserComponent />}> </Route>
        <Route path='/delete-user' element={<DeleteUserComponent />}> </Route>
        <Route path='/devices' element={<ListDevicesComponent />}> </Route>
        <Route path='/create-device' element={<CreateDeviceComponent />}> </Route>
        <Route path='/delete-device' element={<DeleteDeviceComponent />}> </Route>
        <Route path='/update-user' element={<UpdateUserComponent />}> </Route>
        <Route path='/update-device' element={<UpdateDeviceComponent />}> </Route>
      </Routes>
    </div>
    <FooterComponent/>
    </div>
    </Router>
    </div>
  );
}

export default App;

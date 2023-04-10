import React,{ useState } from 'react';
import './App.css';
import ComponentA from './ComponentA';
import FunctionComponent from './ComponentA/partial/FunctionComponent';
import Users from './ComponentA/Users';
import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter,Routes,Route,Link} from "react-router-dom"
import { Navbar } from 'react-bootstrap';
import MyNavBar from './customNavbar';
import Login from './Login';
import Signup from './Signup';
import Routing from './Routing';

function  App() {
    const [showComponent, setshowComponent] = useState(true)
    return(
        <>
        <BrowserRouter>
        <MyNavBar/>
            <Routes>
                <Route path='/' element={showComponent ? <Users/> : <></>}/>
                <Route path='/routing' element={<Routing/>}/>
                <Route path='/user'>
                    <Route path='login' element={<Login/>}/>
                    <Route path='signup' element={<Signup/>}/>
                </Route>
                {/* <button onClick={()=>setshowComponent(!showComponent)}>{showComponent?"Hide Component" : "Show Component"}</button> */}
            </Routes>
        </BrowserRouter>       
        </>
    );
}
  
export default App;

import React,{ useState } from 'react';
import './App.css';
import ComponentA from './ComponentA';
import FunctionComponent from './ComponentA/partial/FunctionComponent';
import Users from './ComponentA/Users';
import "bootstrap/dist/css/bootstrap.min.css"

function  App() {
    const [greetings,setGreetings] = useState('Learning React!!!');  //useState hook
    const [showComponent, setshowComponent] = useState(true)

    return(
        <>
        {/* <button onClick={()=>setshowComponent(!showComponent)}>{showComponent?"Hide Component" : "Show Component"}</button> */}
        {showComponent ? <Users /> : <></>}
        </>
    );
}

export default App;

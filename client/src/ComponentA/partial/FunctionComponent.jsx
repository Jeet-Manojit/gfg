import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { clear } from '@testing-library/user-event/dist/clear';

function FunctionComponent(props) {
const [time, setTime] = useState(0);
const [id, setId] = useState(1);
const [userData, setUserData] = useState({name:"Manojit"});

console.log("render", props)
const {msg} = props;
const BASE_URL = "https://jsonplaceholder.typicode.com/users/";

const getUserData = async()=>{
    const {data} = await axios.get(BASE_URL + id);
    console.log(data);
    setUserData(data);
}

useEffect(() => {
    document.title = "Learning React!!!";
    console.log("componentDidMount");
    return () => {
        console.log("unmounting stage");
      }
}, []);

useEffect(() => {
    // const timer = setInterval(()=>{
    //     console.log("interval");
    //     setTime(time=>time+1);
    // },1000)
    getUserData();
    return () => {
        //clearInterval(timer);
      }
}, [id])

const {name} = userData;


  return (
    <>
    <h1>{msg}</h1>
    <input type="number" placeholder='Enter Id' onChange={e=>setId(e.target.value)}/>
    <h1>Hello {name}, {id}</h1>
    <h1>time elapsed - {time}</h1>
    </>
  )
}

export default FunctionComponent
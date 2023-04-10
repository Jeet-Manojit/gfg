import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Container, Row,} from 'react-bootstrap';
import User from './User';
import { useSearchParams } from 'react-router-dom';
import MyNavBar from '../../customNavbar';

//64242d831d6c17d2a17b54b6
//https://dummyapi.io/data/v1/user?limit=10

function Users(){
    const[search] = useSearchParams();
    const [users, setusers] = useState([]);
    const instance = axios.create({
        baseURL : "https://dummyapi.io/data/v1/user?limit=10",
        headers : {"app-id" : "64242d831d6c17d2a17b54b6"}
    })

    useEffect(() => {
      (async()=>{
        const {data} = (await instance.get()).data;
        //console.log(data);
        setusers(data);
      })();
    
    }, [])

    const filterUsers = (data)=>{
      const searchTerm = (search.get('name')||'').toLowerCase();
      const {firstName,lastName} = data;
      return firstName.toLowerCase().includes(searchTerm) || lastName.toLowerCase().includes(searchTerm);
    }
  
    return (
    <Container fluid>
      <Row>
        {users.filter(filterUsers).map((data)=><User userData={data} key={data.id} />)}
      </Row>
    </Container>
  )
}

export default Users
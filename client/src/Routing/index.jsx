import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

function Routing() {

  const [searchParams, setSearchParams] = useSearchParams();
  //console.log([...searchParams.entries()]);
  
  // useEffect(() => {
  //   setSearchParams({search:"abc"});  
  // }, [])
  

  return (
    <>
      <h1>Routing</h1>
      <input type='test' onChange={e=>setSearchParams({search:e.target.value})}/>
      {/* <h2>{searchParams.get('search')}</h2>
      <h2>{searchParams.get('name')}</h2>
      <h2>{searchParams.get('location')}</h2> */}
    </>
  )
}

export default Routing
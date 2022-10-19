import React, {useEffect, useState} from 'react';

function App() {

  // backend variable to hold all the data from the backend api
  const [backendData, setBackendData]=useState([{}]);

  // fetch the backend api
  useEffect(()=>{
    fetch("/api").then(
      // whatever response we get from api, we get it in json so to ensue that we say response.json
      response=>response.json()
    ).then(
      // get the data inside the json and set the data to backendData variable
      data=>{
        setBackendData(data)
      }
    )
  }, []);

  return (
    <div>
      {(typeof backendData.users==='undefined'?(
        <p>Loading...</p>
      ):(
        backendData.users.map((user, i)=>{
          return(
            <p key={i}>{user}</p>
          )
        })
      ))}
    </div>
  )
}

export default App

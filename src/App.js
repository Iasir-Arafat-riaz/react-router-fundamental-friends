import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Friends from './Component/Friends/Friends';

function App() {
  const [friends, setFriends]= useState([])
  useEffect(()=>{
   fetch("https://jsonplaceholder.typicode.com/users")
   .then(res=>res.json())
   .then(data=>setFriends(data))
  },[])

  return (
    <div className="App">
      
      <h2>friends : {friends.length}</h2>
      {friends.map(friend=><Friends friend={friend}></Friends>)}
    </div>
  );
}

export default App;

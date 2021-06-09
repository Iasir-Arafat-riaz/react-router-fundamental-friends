import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const FriendDetail = () => {
    const{friendId}=useParams()
    const [friendDetail,setFriendDetail]=useState({})
    useEffect(()=>{
      fetch(`https://jsonplaceholder.typicode.com/users/${friendId}`)
    },[])
    return (
        <div>
            <h1>This is friend details {friendId}</h1>
            <h2>give us your detail</h2>
        </div>
    );
};

export default FriendDetail;
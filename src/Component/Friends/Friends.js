import React from 'react';
import { Link } from 'react-router-dom';

const Friends = (props) => {
    const{name,email,id}=props.friend
    const xd = props.friend.company.bs
    const friendStyle = {border:"2px solid blue", margin:"20px", borderRadius:"10px"}

    return (
        <div style={friendStyle}>
            <h1>{id}  {name}</h1>
            <p>email : {email}</p>
            <h4>{xd}</h4>
            <p>ID : <Link to={`FriendDetail/${email}`}><button>click</button></Link> </p>

        </div>
    );
};

export default Friends;
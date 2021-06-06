import React from 'react';

const Friends = (props) => {
    const{name,email,id}=props.friend
    const xd = props.friend.company.bs
    const friendStyle = {border:"2px solid blue", margin:"20px", borderRadius:"10px"}

    return (
        <div style={friendStyle}>
            <h1>{id}  {name}</h1>
            <p>email : {email}</p>
            <h4>{xd}</h4>
        </div>
    );
};

export default Friends;
import React from 'react';

const Friends = (props) => {
    const{name,email}=props.friend
    const friendStyle = {border:"2px solid blue", margin:"20px", borderRadius:"10px"}

    return (
        <div style={friendStyle}>
            <h1>{name}</h1>
            <p>email : {email}</p>
        </div>
    );
};

export default Friends;
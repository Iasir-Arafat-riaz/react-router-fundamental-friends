import React from 'react';

const Friends = (props) => {
    const{name,email}=props.friend

    return (
        <div>
            <h1>{name}</h1>
            <p>email</p>
        </div>
    );
};

export default Friends;
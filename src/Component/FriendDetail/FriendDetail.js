import React from 'react';
import { useParams } from 'react-router';

const FriendDetail = () => {
    const{friendId}=useParams()
    return (
        <div>
            <h1>This is friend details {friendId}</h1>
            <h2>give us your detail</h2>
        </div>
    );
};

export default FriendDetail;
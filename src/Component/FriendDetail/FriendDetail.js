import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const FriendDetail = () => {
    const { friendId } = useParams()
    const [friendDetail, setFriendDetail] = useState({})
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setFriendDetail(data))
    }, []);

    //destructure
    const {email,name}=friendDetail
    return (
        <div>
            <h1>This is friend details {friendId}</h1>
            <h2>give us your detail</h2>
            <h3>here  - {name}</h3>
            <h3>email address : {email}</h3>
        </div>
    );
};

export default FriendDetail;
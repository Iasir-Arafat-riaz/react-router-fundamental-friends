import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Friends = (props) => {
    const { name, email, id } = props.friend
    const xd = props.friend.company.bs
    const friendStyle = { border: "2px solid blue", margin: "20px", borderRadius: "10px" }

    //link er poriborte
    const history = useHistory()
    const handleClick = (frndId)=>{
        history.push(`/friend/${frndId}`)
    }
    

    return (
        <div style={friendStyle}>
            <h1> {name}</h1>
            <p>email : {email}</p>
            <h4>{xd}</h4>
            <Link to={`friend/${id}`}>
                <button>Show Detail of {id}</button>
            </Link>
            <button onClick={()=>handleClick(id)}>show details</button>

        </div>
    );
};

export default Friends;
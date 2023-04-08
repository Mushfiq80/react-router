import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetail = () => {
    const friend = useLoaderData();
    console.log(friend);
    return (
        <div>
            <h3>Everything Detail about the person: </h3>
            <h2>Name: {friend.name}</h2>
            <h4>Email: {friend.email}</h4>
            <h4>Phone: {friend.phone}</h4>
            <h4>Website: {friend.website}</h4>
            <h4>Address: {friend.address.city}</h4>
        </div>
    );
}; 

export default FriendDetail;
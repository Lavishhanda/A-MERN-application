import React from 'react';
import UserList from '../components/UserList.js';

const Users = () =>{
    const USERS = [
        {
     id:'U1',
     name:'Mark Schwarz', 
     image:"https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350",
     places:'3'
    }
];

    return <UserList items={USERS}/>;
}

export default Users;
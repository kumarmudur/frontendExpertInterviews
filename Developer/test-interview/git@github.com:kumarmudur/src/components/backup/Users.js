// LeadsSquare

import React, { useState, useEffect } from 'react';

const url = 'https://jsonplaceholder.typicode.com/users';

const Users = () => {
    const [ users, setUsers] = useState([]);
    // useEffect(() => {
    //    fetch(url).then(response => response.json()).then(data => {
    //         setUsers(data);
    //     });
    // }, []);

    const getUsers = async () => {
        const users = await fetch(url).then(response => response.json());
        // console.log('getUsers..', users);

        const newData = users.map(user => {
             console.log('user', user);
            //  Object.keys(user => {
            //     if(user.address)
            //  });
            return { ...user, ...user.address, ...user.company}
        });

        // console.log('newData..', newData);
    };

    useEffect(() => {
        getUsers();
    }, []);
    
    console.log('setusers.', users);
    return (
        <div>User data</div>
    )
}

export default Users;
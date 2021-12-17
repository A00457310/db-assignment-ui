import UserRows from "./UserRows"
import AddUser from "./AddUser"
import { useState, useEffect } from 'react';
const User = ({ setTitle , setHideButton, toggleShowAddTask}) => {

    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {
        const res = await fetch('http://localhost:3004/user');
        return await res.json();
    };

    const addUser = async (user) => {
        console.log('adding', JSON.stringify(user));
        const res = await fetch(`http://localhost:3004/user`, {
          method: 'POST',
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify(user)
        });
    
        const data = await res.json();
        setUsers([...users, data]);
    };

    useEffect(() => {
        setTitle('Users');
        const getUsers = async () => {
        const users = await fetchUsers();
        console.log(users);
        setUsers(users);
        };
        getUsers();
        toggleShowAddTask();
        setHideButton(false);
    }, [])

    return (
        <>
            {true && <AddUser addUser={addUser} onAdd={() => { console.log('onAdd clicked'); }} />}
            <UserRows users={users} onDelete={() => { console.log('onDelete clicked'); }} onToggle={true} />
        </>
    )
}

export default User

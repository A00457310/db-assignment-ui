import UserRows from "./UserRows"
import AddTask from "./AddTask"
import { useState, useEffect } from 'react';
const User = ({ setTitle , setHideButton}) => {

    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {
        const res = await fetch('http://localhost:3004/user');
        return await res.json();
    };

    useEffect(() => {
        setTitle('Users');
        const getUsers = async () => {
        const users = await fetchUsers();
        console.log(users);
        setUsers(users);
        };
        getUsers();
        setHideButton(false);
    }, [])

    return (
        <>
            {true && <AddTask onAdd={() => { console.log('onAdd clicked'); }} />}
            <UserRows users={users} onDelete={() => { console.log('onDelete clicked'); }} onToggle={true} />
        </>
    )
}

export default User

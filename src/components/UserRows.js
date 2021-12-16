import UserRow from "./UserRow"

const UserRows = ({ users, onDelete, onToggle }) => {
    // const [tasks, setTasks] = useState([
    //     {
    //         "id": 1,
    //         "text": "Doctors Appointment",
    //         "day": "Feb 5th at 2:30pm",
    //         "reminder": true
    //     },
    //     {
    //         "id": 2,
    //         "text": "Meeting at School",
    //         "day": "Feb 6th at 1:30pm",
    //         "reminder": true
    //     }
    // ]);
    return (
        <>
            {users.length > 0 ? users.map(user => {
                return <UserRow key={user.id} user={user} onDelete={onDelete} onToggle={onToggle} />
            }) : 'Nothing to show'}
        </>
    )
}

export default UserRows

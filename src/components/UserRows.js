import UserRow from "./UserRow"

const UserRows = ({ users, onDelete, onToggle }) => {
    return (
        <>
            {users.length > 0 ? users.map(user => {
                return <UserRow key={user.user_id} user={user} onDelete={onDelete} onToggle={onToggle} />
            }) : 'Nothing to show'}
        </>
    )
}

export default UserRows

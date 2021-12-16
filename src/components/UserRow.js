import { FaTimes } from "react-icons/fa";
const UserRow = ({ user, onDelete, onToggle }) => {
    return (
        <div className={`task `} onDoubleClick={() => { console.log('UserRow double clicked'); }}>
            <h3>{user.user_id} <FaTimes style={{color: 'red', cursor: 'pointer'}}
            onClick = {() => { console.log('UserRow cancel clicked'); }}/></h3>
            <p>{user.name}</p>
            <p>{user.email}</p>
        </div>
    )
}

export default UserRow

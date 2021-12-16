import Tasks from "./Tasks"
import AddTask from "./AddTask"

const Address = ({ onDelete, onToggle }) => {

    const tasks = [
        {
            "id": 1,
            "text": "Doctors Appointment",
            "day": "Feb 5th at 2:30pm",
            "reminder": true
        },
        {
            "id": 2,
            "text": "Meeting at School",
            "day": "Feb 6th at 1:30pm",
            "reminder": true
        }
    ];

    return (
        <>
            {true && <AddTask onAdd={() => { console.log('onAdd clicked'); }} />}
            <Tasks tasks={tasks} onDelete={() => { console.log('onDelete clicked'); }} onToggle={true} />
        </>
    )
}

export default Address

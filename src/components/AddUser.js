import { useState } from "react";
const AddUser = ({addUser}) => {
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [name, setName] = useState('');
    const [empStatus, setEmpStatus] = useState('');

    const Addtask = (e) => {
        e.preventDefault();

        if(!name){
            alert('Please add name');
            return;
        }

        // onAdd({text, day, reminder});
        addUser({email, phone, name, employment_status: empStatus});

        setEmail('');
        setEmpStatus('');
        setName('');
        setPhone('');
    };

    return (
        <form className='add-form' onSubmit={Addtask}>
            <div className='form-control'>
                <label>Email</label>
                <input type='text' placeholder='Add Email' value={email} onChange={(e) => {
                    setEmail(e.target.value);
                }}/>
            </div>
            <div className='form-control'>
                <label>Phone</label>
                <input type='text' placeholder='Add Phone' value={phone} onChange={(e) => {
                    setPhone(e.target.value);
                }}/>
            </div>
            <div className='form-control'>
                <label>Name</label>
                <input type='text' placeholder='Add Name' value={name} onChange={(e) => {
                    setName(e.target.value);
                }}/>
            </div>
            <div className='form-control'>
                <label>Employment Status</label>
                <input type='text' placeholder='Add employment status' value={empStatus} onChange={(e) => {
                    setEmpStatus(e.target.value);
                }}/>
            </div>

            <input type='submit' value='Save User' className='btn btn-block' />
        </form>
    )
}

export default AddUser

import { useState } from "react";
const AddAddress = ({addUser, addAddress}) => {
    const [street_address, setStreetAddress] = useState('');
    const [city, setCity] = useState('');
    const [zip_code, setZipCode] = useState('');
    const [province, setProvince] = useState('');
    const [country, setCountry] = useState('');

    const Addtask = (e) => {
        e.preventDefault();

        if(!street_address){
            alert('Please add name');
            return;
        }

        // onAdd({text, day, reminder});
        addAddress({street_address, city, zip_code, province: country});

        setStreetAddress('');
        setZipCode('');
        setCity('');
        setProvince('');
        setCountry('');
    };

    return (
        <form className='add-form' onSubmit={Addtask}>
            <div className='form-control'>
                <label>Street Address</label>
                <input type='text' placeholder='Add Street address' value={street_address} onChange={(e) => {
                    setStreetAddress(e.target.value);
                }}/>
            </div>
            <div className='form-control'>
                <label>City</label>
                <input type='text' placeholder='Add city' value={city} onChange={(e) => {
                    setCity(e.target.value);
                }}/>
            </div>
            <div className='form-control'>
                <label>Zip Code</label>
                <input type='text' placeholder='Add zip code' value={zip_code} onChange={(e) => {
                    setZipCode(e.target.value);
                }}/>
            </div>
            <div className='form-control'>
                <label>Province</label>
                <input type='text' placeholder='Add province' value={province} onChange={(e) => {
                    setProvince(e.target.value);
                }}/>
            </div>
            <div className='form-control'>
                <label>Country</label>
                <input type='text' placeholder='Add country' value={country} onChange={(e) => {
                    setCountry(e.target.value);
                }}/>
            </div>

            <input type='submit' value='Save Address' className='btn btn-block' />
        </form>
    )
}

export default AddAddress

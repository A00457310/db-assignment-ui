import AddressRows from "./AddressRows";
import AddAddress from "./AddAddress";
import { useState, useEffect } from 'react';
const Address = ({ setTitle , setHideButton, toggleShowAddTask}) => {

    const [address, setAddress] = useState([]);

    const fetchAddress = async () => {
        const res = await fetch('http://localhost:3004/address');
        return await res.json();
    };

    const addAddress = async (address) => {
        console.log('adding', JSON.stringify(address));
        const res = await fetch(`http://localhost:3004/address`, {
          method: 'POST',
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify(address)
        });
    
        const data = await res.json();
        setAddress([...address, data]);
    };

    useEffect(() => {
        setTitle('Address');
        const getAddress = async () => {
        const address = await fetchAddress();
        console.log(address);
        setAddress(address);
        };
        getAddress();
        toggleShowAddTask();
        setHideButton(false);
    }, [])

    return (
        <>
            {true && <AddAddress addAddress={addAddress} onAdd={() => { console.log('onAdd clicked'); }} />}
            <AddressRows addresses={address} />
        </>
    )
}

export default Address

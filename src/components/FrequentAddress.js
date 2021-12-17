import { useState, useEffect } from 'react';
const FrequentAddress = ({ setTitle , setHideButton, toggleShowAddTask}) => {

    const [frequentAddresses, setFrequentAddress] = useState([]);

    const fetchFrequentAddresses = async () => {
        const res = await fetch('http://localhost:3004/frequent-address');
        return await res.json();
    };

    useEffect(() => {
        setTitle('Frequent Address');
        const getFrequentAddresses = async () => {
            const frequentAddresses = await fetchFrequentAddresses();
            console.log(frequentAddresses);
            setFrequentAddress(frequentAddresses);
        };
        getFrequentAddresses();
        toggleShowAddTask();
        setHideButton(false);
    }, []);

    return (
        <>
            <>
                {frequentAddresses.length > 0 ? frequentAddresses.map(frequentAddress => {
                    return <div className={`task `} key={`${frequentAddress.user_id}${frequentAddress.address_id}`} onDoubleClick={() => { console.log('Frequent Address double clicked'); }}>
                                <h3>User ID : {frequentAddress.user_id}</h3>
                                <p>Address ID : {frequentAddress.address_id}</p>
                            </div>
                }) : 'Nothing to show'}
            </>
        </>
    )
}

export default FrequentAddress

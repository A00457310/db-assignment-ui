import { useState, useEffect } from 'react';
const Hazard = ({ setTitle , setHideButton, toggleShowAddTask}) => {

    const [frequentAddresses, setFrequentAddress] = useState([]);

    const fetchFrequentAddresses = async () => {
        const res = await fetch('http://localhost:3004/hazard');
        return await res.json();
    };

    useEffect(() => {
        setTitle('Hazard');
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
                    return <div className={`task `} key={frequentAddress.hazard_id} onDoubleClick={() => { console.log('Frequent Address double clicked'); }}>
                                <h3>Hazard ID : {frequentAddress.hazard_id}</h3>
                                <p>Estimated Duration : {frequentAddress.estimated_duration ? frequentAddress.estimated_duration : 'NA'}</p>
                                <p>Type : {frequentAddress.type}</p>
                                <p>Issue ID : {frequentAddress.issue_id}</p>
                            </div>
                }) : 'Nothing to show'}
            </>
        </>
    )
}

export default Hazard

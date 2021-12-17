import { useState, useEffect } from 'react';
const MostFrequentIssues = ({ setTitle , setHideButton, toggleShowAddTask}) => {

    const [frequentAddresses, setFrequentAddress] = useState([]);

    const fetchFrequentAddresses = async () => {
        const res = await fetch('http://localhost:3004/stat1');
        return await res.json();
    };

    useEffect(() => {
        setTitle('Most Frequent places with transit issues');
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
                    return <div className={`task `} key={frequentAddress.address_id} onDoubleClick={() => { console.log('Frequent Address double clicked'); }}>
                                <h3>Address ID : {frequentAddress.address_id}</h3>
                                <p>Street Address : {frequentAddress.street_address}</p>
                                <p>Average Severity : {frequentAddress["AVG(severity)"]}</p>
                                <p>Number of Incidents : {frequentAddress["COUNT(1)"]}</p>
                                <p>Severity: {frequentAddress.severity}</p>
                            </div>
                }) : 'Nothing to show'}
            </>
        </>
    )
}

export default MostFrequentIssues

import { useState, useEffect } from 'react';
const TransitIssue = ({ setTitle , setHideButton, toggleShowAddTask}) => {

    const [frequentAddresses, setFrequentAddress] = useState([]);

    const fetchFrequentAddresses = async () => {
        const res = await fetch('http://localhost:3004/transit-issue');
        return await res.json();
    };

    useEffect(() => {
        setTitle('Transit Issue');
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
                    return <div className={`task `} key={frequentAddress.issue_id} onDoubleClick={() => { console.log('Frequent Address double clicked'); }}>
                                <h3>Issue ID : {frequentAddress.issue_id}</h3>
                                <p>Description : {frequentAddress.description}</p>
                                <p>Date Reported : {frequentAddress.date_reported}</p>
                                <p>Date Resolved : {frequentAddress.date_resolved ? frequentAddress.date_resolved : '-'}</p>
                                <p>End Address ID : {frequentAddress.end_address_id}</p>
                                <p>Start Address ID : {frequentAddress.start_address_id}</p>
                                <p>Severity: {frequentAddress.severity}</p>
                            </div>
                }) : 'Nothing to show'}
            </>
        </>
    )
}

export default TransitIssue

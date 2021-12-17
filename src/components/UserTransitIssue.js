import { useState, useEffect } from 'react';
const UserTransitIssue = ({ setTitle , setHideButton, toggleShowAddTask}) => {

    const [frequentAddresses, setFrequentAddress] = useState([]);

    const fetchFrequentAddresses = async () => {
        const res = await fetch('http://localhost:3004/user-transit-issue');
        return await res.json();
    };

    useEffect(() => {
        setTitle('User Transit Issue');
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
                    return <div className={`task `} key={`${frequentAddress.user_id}${frequentAddress.issue_id}`} onDoubleClick={() => { console.log('Frequent Address double clicked'); }}>
                                <h3>User ID : {frequentAddress.user_id}</h3>
                                <p>Issue ID : {frequentAddress.issue_id}</p>
                            </div>
                }) : 'Nothing to show'}
            </>
        </>
    )
}

export default UserTransitIssue

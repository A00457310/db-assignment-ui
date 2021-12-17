import { useState, useEffect } from 'react';
const Query = ({ setTitle , setHideButton, toggleShowAddTask}) => {

    const [frequentAddresses, setFrequentAddress] = useState([]);

    const fetchFrequentAddresses = async () => {
        const res = await fetch('http://localhost:3004/query');
        return await res.json();
    };

    useEffect(() => {
        setTitle('Query');
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
                    return <div className={`task `} key={frequentAddress.query_id} onDoubleClick={() => { console.log('Frequent Address double clicked'); }}>
                                <h3>Query ID : {frequentAddress.query_id}</h3>
                                <p>Question : {frequentAddress.question}</p>
                                <p>Date : {frequentAddress.date}</p>
                                <p>Urgency : {frequentAddress.urgency}</p>
                            </div>
                }) : 'Nothing to show'}
            </>
        </>
    )
}

export default Query

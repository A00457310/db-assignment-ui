import { useState, useEffect } from 'react';
const Response = ({ setTitle , setHideButton, toggleShowAddTask}) => {

    const [frequentAddresses, setFrequentAddress] = useState([]);

    const fetchFrequentAddresses = async () => {
        const res = await fetch('http://localhost:3004/response');
        return await res.json();
    };

    useEffect(() => {
        setTitle('Response');
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
                    return <div className={`task `} key={frequentAddress.response_id} onDoubleClick={() => { console.log('Frequent Address double clicked'); }}>
                                <h3>Response ID : {frequentAddress.response_id}</h3>
                                <p>Content : {frequentAddress.CONTENT}</p>
                                <p>Date : {frequentAddress.date}</p>
                                <p>Rating : {frequentAddress.RATING}</p>
                                <p>User ID : {frequentAddress.user_id}</p>
                                <p>Query ID : {frequentAddress.query_id}</p>
                            </div>
                }) : 'Nothing to show'}
            </>
        </>
    )
}

export default Response

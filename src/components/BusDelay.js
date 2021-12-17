import UserRows from "./UserRows"
import AddUser from "./AddUser"
import { useState, useEffect } from 'react';
const BusDelay = ({ setTitle , setHideButton, toggleShowAddTask}) => {

    const [busDelays, setBusDelays] = useState([]);

    const fetchBusDelays = async () => {
        const res = await fetch('http://localhost:3004/bus-delay');
        return await res.json();
    };

    useEffect(() => {
        setTitle('Bus Delay');
        const getBusDelays = async () => {
            const busDelays = await fetchBusDelays();
            console.log(busDelays);
            setBusDelays(busDelays);
        };
        getBusDelays();
        toggleShowAddTask();
        setHideButton(false);
    }, []);

    return (
        <>
            <>
                {busDelays.length > 0 ? busDelays.map(busDelay => {
                    return <div className={`task `} key={busDelay.bus_delay_id} onDoubleClick={() => { console.log('BusDelay double clicked'); }}>
                                <h3>Bus Delay ID : {busDelay.bus_delay_id}</h3>
                                <p>Estimated Delay : {busDelay.estimated_delay == null ? new Date().toISOString(): busDelay.estimated_delay}</p>
                                <p>Issue ID : {busDelay.issue_id}</p>
                            </div>
                }) : 'Nothing to show'}
            </>
        </>
    )
}

export default BusDelay

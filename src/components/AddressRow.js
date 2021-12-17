const AddressRow = ({ address }) => {
    return (
        <div className={`task `} onDoubleClick={() => { console.log('AddressRow double clicked'); }}>
            <h3>{address.address_id}</h3>
            <p>{address.street_address}</p>
        </div>
    )
}

export default AddressRow

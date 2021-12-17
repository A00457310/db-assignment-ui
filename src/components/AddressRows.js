import AddressRow from "./AddressRow";

const AddressRows = ({ addresses }) => {
    return (
        <>
            {addresses.length > 0 ? addresses.map(address => {
                return <AddressRow key={address.address_id} address={address} />
            }) : 'Nothing to show'}
        </>
    )
}

export default AddressRows

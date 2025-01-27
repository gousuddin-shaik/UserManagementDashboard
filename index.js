import './index.css'

const UsersListContainer = (props) => {
    const {userDetails,userFormStatus,onSubmitForm,deleteUser} = props;
    const {id,address} = userDetails;
    const onClickEditUser = () => {
        onSubmitForm(userFormStatus);
    }
    const onClickDelete = () => {
        deleteUser(id);
    }
    return(
        <li className='user-details-container'>
            <div>
                <p>id: {userDetails.id}</p>
                <p>name: {userDetails.name}</p>
                <p>username: {userDetails.username}</p>
                <p>email: {userDetails.email}</p>
                <p>phone: {userDetails.phone}</p>
                <p>website: {userDetails.website}</p>
                <h1>Address:</h1>
                <ul>
                    <li>Street: {address.street}</li>
                    <li>Suite: {address.suite}</li>
                    <li>ZipCode: {address.zipcode}</li>
                    <li>City: {address.city}</li>
                    <li>
                        <h3>Geo</h3>
                        <ul>
                            <li>latitude: {address.geo.lat}</li>
                            <li>longitude: {address.geo.lng}</li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className="buttons-container">
                <button type='button' className='button-styles' onClick={onClickEditUser}>Edit User</button>
                <button type='button' className='button-styles' onClick={onClickDelete}>Delete User</button>
            </div>      
        </li>
    )
}

export default UsersListContainer
import {Component} from 'react';

import UsersListContainer from './components/UsersListContainer';
import UserFormContainer from './components/UsersFormContainer';
import './App.css';


class App extends Component{
  state = {
    usersList: [],
    userFormStatus: false,
  }

  componentDidMount = () => {
    this.usersListApi()
  }

  usersListApi = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/');
    const data = await response.json();
    const usersData = data;
    this.setState({usersList: usersData})
  }

  changeUserFormStatus = () => {
    this.setState(prevState => ({userFormStatus: !prevState.userFormStatus}))
  }

  deleteUserDetails = (id) => {
    const{usersList} = this.state;
    const filteredUsersList = usersList.filter(eachUser => eachUser.id !== id);
    this.setState({usersList: filteredUsersList});
  }

  render(){
    const {usersList,userFormStatus} = this.state
    return (userFormStatus ? <UserFormContainer userFormStatus={userFormStatus} onSubmitForm={this.changeUserFormStatus} /> : (
      <div className='bg-container'>
        <h1 className='main-heading'>User Management Dashboard</h1>
        <h1 className='users-list-heading'>Users List</h1>
        <ul className='users-list-container'>
          {
            usersList.map((eachUser) => <UsersListContainer key={eachUser.id} userDetails={eachUser} userFormStatus={userFormStatus} onSubmitForm={this.changeUserFormStatus} deleteUser={this.deleteUserDetails} />)
          }
        </ul>
        <button type='button' className='button-styles' onClick={this.changeUserFormStatus}>Add User</button>
      </div>
    ))
  }
}

export default App;

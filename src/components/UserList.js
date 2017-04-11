import React from 'react';

export default class UserList extends React.Component {

  render() {
    let users = this.props.users.map(user => {
      return <li key={user.id}> name: {user.name}, age: {user.age}, address: {user.address}</li>
    })

    return (
      <ul>
        {users}
      </ul>
    );
  }
}
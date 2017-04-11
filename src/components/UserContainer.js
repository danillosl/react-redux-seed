import React from 'react';
import { connect } from 'react-redux'

import * as userAction from '../actions/userAction'

import UserList from './UserList'

@connect(
  (store) => {
    return { user: store.user }
  }
)
export default class UserContainer extends React.Component {

  componentWillMount() {
    this.props.dispatch(userAction.addUser(
      {
        id: 1,
        age: 43,
        name: 'name 1',
        address: 'adress 1'

      }
    ));

    setTimeout(() => {

      this.props.dispatch(userAction.addUser(
        {
          id: 2,
          age: 25,
          name: 'name 2',
          address: 'adress 2'
        }
      ))

    }, 3000);


  }

  render() {


    return (
      <div style={{ textAlign: 'center' }}>
        <h1>Hello World</h1>

        <UserList users={this.props.user.users}></UserList>
      </div>);
  }
}
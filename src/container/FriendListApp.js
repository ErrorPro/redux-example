import React from 'react'
import {connect} from 'react-redux'
import FriendsList from '../components/FriendsList'
import {remove, star} from '../actions/actions'

export class FriendListApp extends React.Component {
  render() {
    const arr = []

    for (let prop in this.props.reducer.friendsById) {
      arr[prop] = this.props.reducer.friendsById[prop]
    }

    return (
      <div>
        <FriendsList
          list={arr}
          delete={this.props.delete}
          star={this.props.star}
        />
      </div>
    )
  }
}

export default connect(
    state => state,
    {remove, star},
    (state, action, parentProps) => ({
      ...parentProps,
      ...state,
      remove: action.remove,
      star: action.star
    })
  )(FriendListApp)

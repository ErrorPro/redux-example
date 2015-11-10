import React from 'react'
import Friend from './Friend'

export default class FriendsList extends React.Component {
  render() {
    return (<div>
      {this.props.list.map((friend, index) => (
        <Friend
          key={index}
          friend={friend}
          remove={this.props.remove}
          star={this.props.star}
        />
      ))}
    </div>)
  }
}

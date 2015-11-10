import React from 'react'

export default class Friend extends React.Component {
  render() {
    const {friend, remove, star} = this.props

    return (
      <div style={{margin: '20px'}}>
        <input type="checkbox" checked={friend.starred} onChange={() => star(friend.id)}/>
        <span>{friend.id}</span>
        <span>{friend.name}</span>
        <button onClick={() => remove(friend.id)}>Delete</button>
      </div>
    )
  }
}

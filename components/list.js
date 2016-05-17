import React, {Component} from 'react'

class List extends Component {

  constructor (props) {
    super(props)
  }

  render () {
      const items = this.props.items
      return (
        <div>
        <h1>This is your first React list</h1>
        <ul>
          {items.map(function(items) {
          return <li>{items}</li>
        })}
        </ul>
        </div>
      )
  }

}
export default List

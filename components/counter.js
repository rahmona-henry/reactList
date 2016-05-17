import React,  {Component} from 'react'

class Counter extends Component {

  constructor (props){
      super(props)
      this.state = {count:1}
  }


  render() {
    return <h3 onClick={ ()=> this.setState({ count:this.state.count+1 })}>Click Me As Much As You Like! {this.state.count}</h3>
  }
}

export default Counter

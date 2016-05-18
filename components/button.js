import React, {Component} from 'react'

class Button extends Component {

  constructor(props){
    super(props)
  }

 render() {
   return (
   <div ClassName= 'mood-button'>
    <button onClick={ () => this.props.changeMood()}>Change Mood</button>
    </div>
  )
 }

}

export default Button

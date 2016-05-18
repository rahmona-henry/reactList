import React, {Component} from 'react'
import MoodButton from  './MoodButton.js'


class Family extends Component {

constructor(props) {
super(props)
this.state = {id: this.props.id}
this.state = {mood: 'Neutral'}

this.state = {changeMood: function () {
   const moods = [
     'Awful',
     'Bad',
     'Neutral',
     'Good',
     'Great',
     'Wonderful',
     'Perfect'
   ]


}
}
}

changeMood() {
    console.log('hello')
}

render() {
  return (
    <div>
    <h2>{this.props.name}</h2>
    <p>Mood: {this.state.mood}</p>
    <MoodButton changeMood={this.state.changeMood}/>
    </div>

  )
}
}
export default Family

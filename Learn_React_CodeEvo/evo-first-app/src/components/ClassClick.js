import React, { Component } from 'react'

 class ClassClick extends Component {
ClickFunction() {
        console.log('Clicked in the class componet')
    }
  render() {
    return (
        <div>
          <button onClick = {this.ClickFunction}>Class Click</button>
        </div>
    )
  }
}

export default ClassClick
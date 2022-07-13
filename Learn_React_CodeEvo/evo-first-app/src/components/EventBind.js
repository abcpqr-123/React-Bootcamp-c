import React, { Component } from 'react'

 class EventBind extends Component {
    constructor(props) {
      super(props)
       
      this.state = {
        message: 'Hello'
      }
      this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler(){
        this.setState({
            message: 'Good bye'
        })
        console.log(this)
    }

  render() {
    return (
      <div>
         <div> {this.state.message} </div>
          <button onClick = {this.clickHandler}>ClickEventBind</button>
      </div>
    )
  }
}

export default EventBind
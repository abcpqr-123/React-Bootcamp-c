import React, { Component } from 'react'

 class FocusInput extends Component {

    constructor(props) {
      super(props)
         this.componentRef = React.createRef()
    }

    clickHandler = () => {
        this.componentRef.current.Focust()
    }
  render() {
    return (
      <div>
          <input ref = {this.componentRef} />
          <button onClick={this.clickHandler}>foucs Input</button>
      </div>
    )
  }
}

export default FocusInput
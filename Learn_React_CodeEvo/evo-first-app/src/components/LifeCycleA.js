import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

 class LifeCycleA extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
          name: 'Vishwas'
       }
       console.log('LifeCycleA constructor')
     }


     static getDerivedStateFromProps (props, state){
         console.log('LifeCycleA getDerivedStateFromProps')
     }


     componentDidMount(){
         console.log('LifecycleA componentDidMount')
     }


     shouldComponentUpdate() {
         console.log('LifecycleA shouldComponetUpdate')
         return true
     }


     getSnapshotBeforeUpdate(prevProps, prevState){
         console.log('LifecycleA getSnapshotBeforeUpdate')
         return null
     }
      
    componentDidUpdate(){
        console.log('LifecycleA componetDidUpdate')
    }


    changeState = () => {
        this.setState({
            name: 'Surya'
        })
    }
  render() {
      console.log('LifeCycleA render')
    return (
        <div>
      <div>LifeCycle A</div>
      <button onClick={this.changeState}>change state</button>
      <LifeCycleB />
      </div>
    )
  }
}

export default LifeCycleA
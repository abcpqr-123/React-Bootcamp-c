import React, { Component } from 'react'

 class LifeCycleB extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
          name: 'Vishwas'
       }
       console.log('LifeCycleB constructor')
     }


     static getDerivedStateFromProps (props, state){
         console.log('LifeCycleB getDerivedStateFromProps')
         return null
     }
     componentDidMount(){
         console.log('LifecycleB componentDidMount')
     }
     
     shouldComponentUpdate() {
        console.log('LifeCycleB shouldComponetUpdate')
        return true
    }


    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('LifeCycleB getSnapshotBeforeUpdate')
        return null
    }
     
   componentDidUpdate(){
       console.log('LifeCycleB componetDidUpdate')
   }

  render() {
      console.log('LifeCycleB render')
    return (
      <div>LifeCycle B</div>
    )
  }
}

export default LifeCycleB
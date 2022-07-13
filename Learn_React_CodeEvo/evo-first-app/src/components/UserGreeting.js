

// import React, { Component } from 'react'

//  class UserGreeting extends Component {
//       constructor(props) {
//         super(props)
      
//         this.state = {
//            loggedIn: true
//         }
//       }
//       render() {
//         if (this.state.loggedIn){
//             return (
//               <div>loggedIn</div>
//             )
//         }else{
//             return(
//                 <div>Login first</div>
//             )
//         }
//   }
// }

// export default UserGreeting



// or


// import React, { Component } from 'react'

// class UserGreeting extends Component {
// constructor(props) {
//   super(props)

//   this.state = {
//      LoggedIn: true
//   }
// }
 
//   render() {
//       let message
//        if (this.state.LoggedIn){
//            message = <div>Welcome Surya</div>
//        }else{
//            message = <div>Welcome Soorya</div>
//        }
//     return (
//       <div>{message}</div>
//     )
//   }
// }
// export default UserGreeting

// or




// import React, { Component } from 'react'

//  class UserGreeting extends Component {
//     constructor(props) {
//       super(props)
    
//       this.state = {
//          loggeIn: true
//       }
//     }
            
//   render() {
//     return this.state.loggeIn ? (
//        <div>Welcome surya</div>
//     ) : (
//         <div>Welcome Guest</div>
//     )
//   }
// }
// export default UserGreeting


// or



import React, { Component } from 'react'

export class UserGreeting extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
        loggedIn: false
      }
    }
  render() {
    return (
      this.state.loggedIn && <div>Welcome</div>
    )
  }
}

export default UserGreeting

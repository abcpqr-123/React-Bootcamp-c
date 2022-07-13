// import React, { Component } from 'react'
                 

// export class Person extends Component {
//   render(person) {
//     return (
//       <div>
//           <h2>
//               I am {person.name}. I am {person.age} years old. I know {person.skill}
//           </h2>
//       </div>
//     )
//   }
// }

// export default Person



// // ================================================



import React from "react";


function Person({person}){
    return(
        <div>
            <h2>
                I am {person.name}. I am {person.age} years old. I know {person.skill}
            </h2>
        </div>
    )
}

export default Person
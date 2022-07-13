// import React, { Component } from 'react'
// import Person from './Person'


// export class NameList extends Component {

//   render() {
//     const persons = [
//       {
//           id: 1,
//           name: 'Surya',
//           age: 19,
//           skill: 'React'
//       }
//    , {
//        id: 1,
//        name: 'Shiva',
//        age: 31,
//        skill: 'Angular'
//    }, 
//    {
//        id: 1,
//        name: 'Amrut',
//        age: 20,
//        skill: 'View'
//    }
// ]

// const personList = persons.map(person => <Person person = {person} />)
//     return (
//         <div>
//           {personList}
//         </div>
//     )
//   }
// }

// export default NameList


// // =================================================================



import React from 'react'
import Person from './Person'


function NameList(){
  const persons = [
    {
      id: 1,
      name: 'Surya',
      age: 20,
      skill: 'React'
    },
    {
      id: 2,
      name: 'Sanjay',
      age: 22,
      skill: 'Angular'
    },
    {
      id: 1,
      name: 'Surya2',
      age: 20,
      skill: 'View'
    }
  ]
  const personList = persons.map(person => <Person key = {person.name} person = {person} />)
  return <div>
           {personList}
         </div>
}

export default NameList

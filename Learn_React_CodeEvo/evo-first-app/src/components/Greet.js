import React from 'react'

const Greet = ({name, heroName}) => {
    // const {name, heroName} = props
        return (
            <div>
                 <h1>
                 Hello {name} also known as {heroName} -
                 </h1>
            </div>
        )
}

export default Greet
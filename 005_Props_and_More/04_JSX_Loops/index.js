class App extends React.Component {
    render() {
        return(
            <div>
            <p>Friend.js</p>
               <Friend 
                   name = "Surya"
                   hobbies = {['Playing', 'Singing', 'Dancing']}
               />

                <Friend 
                   name = "Suprit"
                   hobbies = {['Playing','Dancing']}
               />
            </div>
        )
    
}

}

ReactDOM.render(<App />, document.getElementById('root'))
// class Hello extends React.Component {
//     render(){
//         return <h1>Hello There!</h1>
//     }
// }

class App extends React.Component {
    
    render(){
        return(
            <div>
                <Hello />
                <NumPicker />
            </div>
            )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))
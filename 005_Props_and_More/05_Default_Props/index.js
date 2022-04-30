class App extends React.Component{
    render(){
        return (
            <div>
                <Hello
                    to = "Surya"
                    from = "Soorya"
                    bangs = {4}
                   />
                <Hello
                    to = "Dog"
                   />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))
class App extends React.Component {
    render(){
        return (
        <div>
            <Hello 
            to = "Surya"
            from = "Sun" 
            bangs = {4}
            img = "img.com"
            />
             <Hello 
            to = "Boy"
            from = "Me" 
            bangs = {4}
            />
        </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))
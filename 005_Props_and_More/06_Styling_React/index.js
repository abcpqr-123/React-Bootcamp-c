class App extends React.Component{
    render(){
        return(
            <div>
               <h1>Slot Machine</h1>
               <Machine 
                   s1 = "x"
                   s2 = "x"
                   s3 = "x"
               />
               <Machine 
                   s1 = "x"
                   s2 = "y"
                   s3 = "z"
               />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))
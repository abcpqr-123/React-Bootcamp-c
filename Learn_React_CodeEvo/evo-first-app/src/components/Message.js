import React, {Component} from "react"

class Message extends Component {

    constructor(){
        super()
        this.state = {
            Message: 'welcome visitor'
        }
    }

    changeMessage() {
        this.setState({
            Message: <h1>Thank u for Subscribing</h1>
        })
    }
    render(){
        return (
            <div>
                <h1>
                {this.state.Message}
                </h1>
                <button onClick  = {() => this.changeMessage()}>Subscribe</button>
            </div>
                
        )
    }
}

export default Message
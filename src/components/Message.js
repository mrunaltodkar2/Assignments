import React, {Component} from 'react';

class Message extends Component{
    constructor(){
        super();
        this.state = {
            message: "Welcome Visitor!!"
        }
    }
    changeMessage(){
        this.setState({
            message: "Thanks for subscribing!"
    })
    }

    render(){
    return(
        <div>
            <h3>{this.state.message}</h3>
            <button onClick={()=>this.changeMessage()}>subscribe</button>
        </div>

    ) 
    }
}

export default Message;
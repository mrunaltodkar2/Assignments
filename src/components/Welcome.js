import React, {Component} from 'react';

class Welcome extends Component{
    render(){
    return <h3>Class Component for {this.props.name}</h3>
    }
}

export default Welcome;
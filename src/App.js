import React from 'react';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter'

class App extends React.Component {
  render() {
    //const text = "something";
    return (
      <div className="App">

        {/* <Greet name='Mrunal'/> 
        <Greet name='Ram'/>       
        <Welcome name="Mrunal"/> */}
        {/* <Hello /> */}

        {/* <Message /> */}
        <Counter />


      </div>
    );
  }
}

// class Welcome extends React.Component{
//   render(){
//     const {text} = this.props;
//     return (
//       <p>{text}</p>
//     );
//   }
// }

export default App;

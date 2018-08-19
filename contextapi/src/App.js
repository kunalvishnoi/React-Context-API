import React, { Component , createContext } from 'react';
import logo from './logo.svg';
import './App.css';

const Mycontext = createContext();

class MyProvider extends Component {
  state = {
    name: 'kunal',
    count: 21 ,
    course: 'btech'
  }
  render() {
    return (
        <Mycontext.Provider value={{
          state: this.state,
          countIncrease: () => this.setState({
            count: this.state.count + 1
          }) ,
          countDecrease: () => this.setState({
            count: this.state.count - 1
          })
        }}>
        {this.props.children}
        </Mycontext.Provider>
      )
  }
}
const Family = () => (
  <div className="family">
    <p>Below details are</p>
    <hr style={{borderBottom: '2px solid black'}} width="10%" />
    <Person />
  </div>
  )
class Person extends Component {
  render() {
    return (
  <div className="Person">
    <Mycontext.Consumer>
      {(value) => (
        <div>
        <p>Name: {value.state.name}</p>
        <p>Count: {value.state.count}</p>
        <button onClick={value.countIncrease}>count++</button>&nbsp;&nbsp;
        <button onClick={value.countDecrease}>count--</button>
        </div>
        )}
    </Mycontext.Consumer>
  </div>
  )
  }
}
class App extends Component {
  render() {
    return (
      <div className="App">
      <MyProvider>
        <Family />
        <hr width="10%" style={{borderBottom: '2px solid black' , marginTop: '20px'}} />
        <p>
          Working fine
        </p>
        </MyProvider>
      </div>
    );
  }
}

export default App;

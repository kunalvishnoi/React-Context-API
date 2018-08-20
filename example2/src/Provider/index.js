import React, { Component } from 'react';
import AppContext from '../Context';
class ContextProvider extends Component {
  constructor() {
    super();
    this.state = {
      posts: []
    }
  }
  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/posts/')
    .then(response => response.json())
    .then(data => this.setState({posts:data}))
  }
  render() {
    return (
      <AppContext.Provider value={{posts:this.state.posts}}>
      {this.props.children}
      </AppContext.Provider>
      );
  }
  }
  export default ContextProvider;



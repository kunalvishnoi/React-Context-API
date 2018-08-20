import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AppContext from './Context';
import ContextProvider from './Provider';

class App extends Component {
  render() {
    return (
      <div className="App">
      <h2>Posts</h2>
      <hr width="5%" style={{borderBottom: '2px solid black'}}/>
      <ContextProvider>
        <AppContext.Consumer>
          {(data) =>
            <div>
              {data.posts.map(p=>
                <div key={p.id}>
                  <h4>{p.id})&nbsp;{p.title}</h4>
                </div>
                )}
            </div>
          }
        </AppContext.Consumer>
      </ContextProvider>
      </div>
    );
  }
}

export default App;

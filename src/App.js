import React, { Component } from 'react';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';
import Header from './components/Header';
import './App.css';
//import UserForm from './components/UserForm';
import Minesweeper from './components/Minesweeper';
import Instruction from './components/Instruction';

class App extends Component {
  render() {
    return (
      <div> 
        <BrowserRouter>
          <Header />
          <div className="App">
            <Route exact={true} path="/Minesweeper" component={Minesweeper} /> 
            <Route exact={true} path="/Instruction" component={Instruction} />
          </div> 
        </BrowserRouter>
      </div>
    );
  }
}

export default App;


import React, { Component } from 'react';
import './App.css';
import AppHeader from './components/AppHeader';
import { connect } from 'react-redux';
import { updateUser } from './actions/user-action'
import { Button } from '@storybook/react/demo';

class App extends Component {
  constructor(props){
      super(props);

      this.onUpdateUser = this.onUpdateUser.bind(this);
  }

  onUpdateUser(event){
      this.props.onUpdateUser(event.target.value)
  }

  render() {
    console.log(this.props);
    return (
      <div className="App">

        <AppHeader/>
  
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          Andrew is here
        </p>


        <h1>{this.props.user}</h1>
        <input onChange={this.onUpdateUser}/>
        <Button onClick={this.onUpdateUser}>CHANGE USER</Button>
      </div>
    );
  }
}

const mapStateToProps = state =>({
  product:state.prod,
  user: state.use
})

const mapActionsToProps = {
  onUpdateUser: updateUser
}

export default connect(
  mapStateToProps,
  mapActionsToProps
)(App);

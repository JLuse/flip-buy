import React , {Component} from 'react';
import Header from './components/Header/Header';
import Signup from './components/Signup/Signup';
import './app.css';


class App extends Component {
  state = {
    isLoggedIn: false
  }

  updateLogin = (userObject) => {
    // this.setState
  }

  render() {
    return (
      <div className="App">
        <Header loggedIn={this.state.isLoggedIn}/>
        <Signup loggedIn={this.state.isLoggedIn}/>
      </div>
    );
  }
}
export default App;

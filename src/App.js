import React , {Component} from 'react';
import { Route, Switch } from 'react-router-dom'
import Header from './components/Header/Header';
import Signup from './components/Signup/Signup';
import Home from './components/Home/Home'
import './app.css';


class App extends Component {
  state = {
    isLoggedin: false
  }

  // Pass islogin from Signup route
  // might create helper for this
  handleLogin = (isLoggedin) => {
    this.setState({isLoggedin})
  }

  render() {
    // extract the value
    const {isLoggedin} = this.state;
    return (
      <div className="App">
      <Header isLogin={isLoggedin}/>
      <Switch>
        {
            !isLoggedin ?
            <Route exact path='/' render={() => <Signup isLogin={this.handleLogin}/>}/>
              :
            <Route path='/' render={() =><Home handleLogged={this.handleLogin}/> }/>
          }
        </Switch>
      </div>
    )
  }
}
export default App;

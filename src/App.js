import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import Header from './components/all-header/header/header.component';
import HomePage from './pages/home/homepage.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up-page';
import BookingPage from './pages/booking-page/booking-page';
import EditProfile from './pages/edit-profile/edit-profile.component';
import AccountPage from './pages/my-account-page/account-page.component';
import Login from './pages/sign-in-and-sign-up/login';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {

  state = {
    startPosition: '',
    endPosition: ''
  }

  handleStartPositionChange = (p) => {
    this.setState({
      startPosition: p
    });
  }

  handleEndPositionChange = (p) => {
    this.setState({
      endPosition: p
    });
  }

  render() {
    return (
      <div> 
          <Header />
          <Switch>
            {/* <Route exact path='/' component={HomePage} /> */}
            <Route exact path='/login' component={Login} />
            <Route exact path='/bookride' component={Login} />
            <Route exact path='/editprofile' component={EditProfile} />
            <Route exact path='/my-account' component={AccountPage} />
            <Route exact path='/' render={(props) => <HomePage onStartPositionChange={this.handleStartPositionChange} onEndPositionChange={this.handleEndPositionChange} {...props} />} />
          </Switch>
      </div>
    );    
  }
}

export default App;

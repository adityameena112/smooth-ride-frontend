import React, { Component } from "react";
import '../../css/login/css/Login-Form-Clean.css';
import '../../css/login/css/styles.css';
import '../../css/login/fonts/ionicons.min.css';
import { AUTHENTICATE_USER } from "../../common/api/api";

export default class Login extends Component {

    state = {
        username: '',
        password: ''
    }

    handleLogin = (e) => {
        e.preventDefault();
        console.log("Login Successful");
        try {
            const response = AUTHENTICATE_USER(this.state.username, this.state.password);    
            
            console.log(response + "-----------------------------");
            
            // localStorage.setItem("token", response.data.id_token);
            this.setState({
                username: '',
                password: ''
            });
        } catch (error) {
            console.log(error);
        }
    }  

    handleUsername = (username) => {
        this.setState({
            username
        });
    }

    handlePassword = (password) => {
        this.setState({
            password
        });
    }

  render() {
    return (
        <div class="login-clean">
            <form onSubmit={(e) => this.handleLogin(e)}>
                <h2 className="sr-only">Login Form</h2>
                <div className="illustration"><i className="icon ion-ios-navigate"></i></div>
                <div className="form-group">
                    <input className="form-control" value={this.state.username} onChange={(e) => this.handleUsername(e.target.value)} type="text" name="username" placeholder="Username" /></div>
                <div className="form-group">
                    <input className="form-control" value={this.state.password} onChange={(e) => this.handlePassword(e.target.value)} type="password" name="password" placeholder="Password" /></div>
                <div className="form-group"><button className="btn btn-primary btn-block" type="submit">Log In</button></div>
                <a className="forgot" href="#">Forgot your email or password?</a>
            </form>
        </div>
    );
  }
}

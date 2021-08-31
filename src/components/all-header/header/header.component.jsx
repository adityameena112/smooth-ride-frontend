import React from "react";
import { Link } from "react-router-dom";
import { Avatar } from "@material-ui/core";
import "./header.styles.scss";

export default class Header extends React.Component {
  state = {
    isLoggedIn: false,
  };

  componentDidMount() {
	  const token = localStorage.getItem("token");
	  if (token != null) {
		  this.setState({
			  isLoggedIn: true
		  });
	  }
  }

  render() {
    return (
      

      <div className='header'>
      	<header id="fh5co-header-section" className="sticky-banner">
      		<div className="container">
      			<div className="nav-header">
      				<h1 id="fh5co-logo" className="navbar-brand"><Link to="/"> Smooth Ride</Link></h1>
      				<nav id="fh5co-menu-wrap" role="navigation">
      					<ul className="sf-menu" id="fh5co-primary-menu">
      						<li className="active"><Link to="/">Home</Link></li>
      						<li className="active"><Link to="/bookride">Book Now</Link></li>
      						{this.logoutButtonLoader()}
      					</ul>

      				</nav>
      			</div>
      		</div>
      	</header>
      </div>
    );
  }

  logoutButtonLoader = () => {
    if (this.state.isLoggedIn) {
      return (
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="/#"
            id="navbarDropdownMenuLink"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <Avatar>A</Avatar>
          </a>
          <div
            className="dropdown-menu"
            aria-labelledby="navbarDropdownMenuLink"
          >
            <Link className="dropdown-item" to="/my-account">
              My Account
            </Link>
            <Link className="dropdown-item" to="/editprofile">
              Edit Profile
            </Link>
            <Link className="dropdown-item" href="/#">
              Log Out
            </Link>
          </div>
        </li>
      );
    } else {
      return (
        <li>
          <Link className="dropdown-item" to="/login">
            Login
          </Link>
        </li>
      );
    }
  };

  handleClickOpen = () => {
    console.log(
      "----------------------------------------------------------------"
    );
  };
}

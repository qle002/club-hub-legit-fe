import React, { Component } from "react";
import logo from '../../assets/logo.svg';
import './Authentication.css';

//Basically login page
export default class Authentication extends Component {
  render() {
    return (
      <div className='Signin'>
        <img src={logo} className='Login-logo' alt='logo'/>
        <button id='Signin-button'>Signin with your PSU Account</button>
      </div>
    );
  };
};


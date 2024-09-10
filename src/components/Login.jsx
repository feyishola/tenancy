

import React, { useReducer } from 'react';
import './Login.css';
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { IoCloseCircleOutline } from "react-icons/io5";

// Initial state for the form
const initialState = {
  email: '',
  password: '',
  showPassword: false,
};

// Reducer function to handle state changes
const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_EMAIL':
      return { ...state, email: action.payload };
    case 'SET_PASSWORD':
      return { ...state, password: action.payload };
    case 'TOGGLE_SHOW_PASSWORD':
      return { ...state, showPassword: !state.showPassword };
    default:
      return state;
  }
};

const Login = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleEmailChange = (e) => {
    dispatch({ type: 'SET_EMAIL', payload: e.target.value });
  };

  const handlePasswordChange = (e) => {
    dispatch({ type: 'SET_PASSWORD', payload: e.target.value });
  };

  const toggleShowPassword = () => {
    dispatch({ type: 'TOGGLE_SHOW_PASSWORD' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Email:', state.email);
    console.log('Password:', state.password);
  };

  return (
    <div className="login-container">
      <button className="close-btn">Close <IoCloseCircleOutline /></button>
      <br />
      <br />
      <br />
      <div className="text_wrap">
        <div className="login-header">
          <h3>Welcome back! </h3>
          <p>Login to your account.</p>
        </div>
        <div className="account-info">
          <p>Don't have an account? </p>
          <a href="#">Create Account</a>
        </div>
      </div>

      <div className="social-login">
        <button className="facebook-btn">
          <FaFacebook className='icon' /> Login With Facebook
        </button>
        <button className="google-btn">
          <FaGoogle className='icon' /> Login With Google
        </button>
      </div>

      <form onSubmit={handleSubmit} className="login-form">
        <label htmlFor="email">EMAIL ADDRESS</label>
        <input
          id="email"
          type="email"
          value={state.email}
          onChange={handleEmailChange}
          placeholder="onogwu@gmail.com"
          required
        />

        <div className="password-container">
          <label htmlFor="password">PASSWORD</label>
          <a href="#" className="forgot-password">Forgot Password?</a>
        </div>
        <div className="show-password">
          <input
            type={state.showPassword ? 'text' : 'password'}
            id="password"
            value={state.password}
            onChange={handlePasswordChange}
            placeholder="Enter your password"
            required
          />
          <span className="toggle-password" onClick={toggleShowPassword}>
            {state.showPassword ? 'Hide' : 'Show'}
          </span>
        </div>

        <button type="submit" className="login-btn">Login To My Account</button>
      </form>
    </div>
  );
};

export default Login;

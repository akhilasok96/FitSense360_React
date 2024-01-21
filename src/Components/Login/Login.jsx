import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import "./Login.css";

import { useState } from "react";

import workoutImage from "../Assets/run.svg";
import meditation from "../Assets/meditation.svg";

export const Login = () => {
  const [isSignUpMode, setIsSignUpMode] = useState(false);

  const handleSignInClick = () => {
    setIsSignUpMode(false);
  };

  const handleSignUpClick = () => {
    setIsSignUpMode(true);
  };

  return (
    <div className={`container ${isSignUpMode ? "sign-up-mode" : ""}`}>
      <div className='forms-container'>
        <div className='signin-signup'>
          <form action='' className='sign-in-form'>
            <h2 className='title'>Sign In</h2>
            <div className='input-field'>
              <FontAwesomeIcon icon={faUser} />
              <input type='email' id='email' placeholder='Email' />
            </div>
            <div className='input-field'>
              <FontAwesomeIcon icon={faLock} />
              <input type='password' id='password' placeholder='Password' />
            </div>
            <input type='submit' value={"Login"} className='btn solid' />
            <p className='social-text'>Or sign in with Google</p>
            <div className='social-media'>
              <a href='#' className='social-icon'>
                <FontAwesomeIcon className='google-icon' icon={faGoogle} />
              </a>
            </div>
          </form>

          <form action='' className='sign-up-form'>
            <h2 className='title'>Sign Up</h2>
            <div className='input-field'>
              <FontAwesomeIcon icon={faUser} />
              <input type='text' id='username' placeholder='Username' />
            </div>
            <div className='input-field'>
              <FontAwesomeIcon icon={faEnvelope} />
              <input type='email' id='signup-email' placeholder='Email' />
            </div>
            <div className='input-field'>
              <FontAwesomeIcon icon={faLock} />
              <input
                type='password'
                id='signup-password'
                placeholder='Password'
              />
            </div>
            <input type='submit' value={"Sign Up"} className='btn solid' />
            <div className='social-media'>
              <a href='#' className='social-icon'>
                <FontAwesomeIcon className='google-icon' icon={faGoogle} />
              </a>
            </div>
          </form>
        </div>
      </div>
      <div className='panels-container'>
        <div className='panel left-panel'>
          <div className='content'>
            <h3>New here ?</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit
              unde, quisquam optio minus iure cumque facilis dolorum fugiat?
            </p>
            <button
              className='btn transparent'
              id='sign-up-btn'
              onClick={handleSignUpClick}
            >
              Sign Up
            </button>
          </div>
          <img src={meditation} className='image' alt='image_logo' />
        </div>

        <div className='panel right-panel'>
          <div className='content'>
            <h3>One of us ?</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit
              unde, quisquam optio minus iure cumque facilis dolorum fugiat?
            </p>
            <button
              className='btn transparent'
              id='sign-up-btn'
              onClick={handleSignInClick}
            >
              Sign In
            </button>
          </div>
          <img src={workoutImage} className='image' alt='image_logo' />
        </div>
      </div>
    </div>
  );
};

export default Login;

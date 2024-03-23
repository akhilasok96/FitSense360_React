import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import "./Login.css";

import { useState, useRef, useEffect } from "react";
import { useUserAuth } from "../../context/UserAuthContext";
import { useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";

import workoutImage from "../Assets/run.svg";
import curlImage from "../Assets/workout.svg";

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;

export const Login = () => {
  const navigate = useNavigate();

  const userRef = useRef();

  const [isSignUpMode, setIsSignUpMode] = useState(false);

  const handleSignInClick = () => {
    setIsSignUpMode(false);
  };

  const handleSignUpClick = () => {
    setIsSignUpMode(true);
  };

  //SignUp Code
  const [userName, setUserName] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");

  const { signUp } = useUserAuth();

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setValidName(USER_REGEX.test(userName));
  }, [userName]);

  useEffect(() => {
    setValidPassword(PWD_REGEX.test(password));
  }, [password]);

  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email));
  }, [email]);

  useEffect(() => {
    setErrMsg("");
  }, [userName, password, email]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const v1 = USER_REGEX.test(userName);
    const v2 = PWD_REGEX.test(password);
    const v3 = EMAIL_REGEX.test(email);
    if (!v1 || !v2 || !v3) {
      setErrMsg("Invalid Entry");
      return;
    } else {
      try {
        await signUp(email, password).then((res) => {
          const user = res.user;
          updateProfile(user, {
            displayName: userName,
          });
        });
        navigate("/home");
      } catch (err) {
        setErrMsg(err.message);
      }
    }
  };

  //signIn Code

  const [emailLog, setEmailLog] = useState("");
  const [passwordLog, setPasswordLog] = useState("");

  const [errMsgLog, setErrMsgLog] = useState("");

  const { logIn, googleSignIn } = useUserAuth();

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/home");
    } catch (err) {
      setErrMsg(err.message);
    }
  };

  useEffect(() => {
    setErrMsgLog("");
  }, [passwordLog, emailLog]);

  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    try {
      await logIn(emailLog, passwordLog);
      navigate("/home");
    } catch (err) {
      setErrMsg(err.message);
    }
  };

  return (
    <div className={`container-login ${isSignUpMode ? "sign-up-mode" : ""}`}>
      <div className='forms-container-login'>
        <div className='signin-signup'>
          <form onSubmit={handleSubmitLogin} action='' className='sign-in-form'>
            <p className={errMsgLog ? "errorTitle" : "hide"}>{errMsgLog}</p>
            <h2 className='login-title'>Sign In</h2>
            <div className='login-input-field'>
              <FontAwesomeIcon icon={faUser} />
              <input
                type='email'
                id='email'
                placeholder='Email'
                autoComplete='off'
                value={emailLog}
                onChange={(e) => setEmailLog(e.target.value)}
                required
              />
            </div>
            <div className='login-input-field'>
              <FontAwesomeIcon icon={faLock} />
              <input
                type='password'
                id='password'
                placeholder='Password'
                value={passwordLog}
                onChange={(e) => setPasswordLog(e.target.value)}
                required
              />
            </div>
            <input type='submit' value={"Login"} className='login-btn solid' />
            <p className='social-text'>Or sign in with Google</p>
            <div className='social-media'>
              <a onClick={handleGoogleSignIn} href='#' className='social-icon'>
                <FontAwesomeIcon className='google-icon' icon={faGoogle} />
              </a>
            </div>
          </form>

          <form onSubmit={handleSubmit} className='sign-up-form'>
            <h2 className='login-title'>Sign Up</h2>
            <div className='login-input-field'>
              <FontAwesomeIcon icon={faUser} />
              <input
                type='text'
                id='username'
                placeholder='Username'
                ref={userRef}
                autoComplete='off'
                onChange={(e) => setUserName(e.target.value)}
                value={userName}
                required
                aria-invalid={validName ? "false" : "true"}
                aria-describedby='uidnote'
                onFocus={() => setUserFocus(true)}
                onBlur={() => setUserFocus(false)}
              />
            </div>
            <div className='login-input-field'>
              <FontAwesomeIcon icon={faEnvelope} />
              <input
                type='email'
                id='signup-email'
                placeholder='Email'
                autoComplete='off'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-invalid={validEmail ? "false" : "true"}
                aria-describedby='emailnote'
                onFocus={() => setEmailFocus(true)}
                onBlur={() => setEmailFocus(false)}
                required
              />
            </div>
            <div className='login-input-field'>
              <FontAwesomeIcon icon={faLock} />
              <input
                type='password'
                id='signup-password'
                placeholder='Password'
                autoComplete='off'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                aria-invalid={validPassword ? "false" : "true"}
                aria-describedby='pwdnote'
                onFocus={() => setPasswordFocus(true)}
                onBlur={() => setPasswordFocus(false)}
                required
              />
            </div>
            <button
              type='submit'
              value={"Sign Up"}
              className='login-btn solid'
              disabled={
                !validPassword || !validEmail || !validName ? true : false
              }
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
      <div className='panels-container'>
        <div className='panel left-panel'>
          <div className='content'>
            <h3>New here ?</h3>
            <p>
              Create an account to start your personalized workout journey
              today.
            </p>
            <button
              className='panel-btn login-btn transparent'
              id='sign-up-btn'
              onClick={handleSignUpClick}
            >
              Sign Up
            </button>
          </div>
          <img src={curlImage} className='image' alt='image_logo' />
        </div>

        <div className='panel right-panel'>
          <div className='content'>
            <h3> Already part of our community?</h3>
            <p>Log in to continue your fitness journey.</p>
            <button
              className='panel-btn login-btn transparent'
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

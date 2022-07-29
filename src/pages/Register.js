import { useState } from "react";
import '../css/Login-css.css';
import { Link } from "react-router-dom";

const Register = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [hasUsernameError, setHasUsernameError] = useState(false);
    const [usernameError, setUsernameError] = useState("");
    const [hasPasswordError, setHasPasswordError] = useState(false);
    const [passwordError, setPasswordError] = useState("");
    const [hasSubmitError, setHasSubmitError] = useState(false);
    const [submitError, setSubmitError] = useState("");
    const [usernameClass, setUsernameClass] = useState("form-control");
    const [passwordClass, setPasswordClass] = useState("form-control");

    function handleUsernameChange(input) {
        if(input === "") {
            setHasUsernameError(true);
            setUsernameClass("form-control is-invalid");
            setUsernameError("Cannot be blank");
            setUsername("");
        } else {
            setHasUsernameError(false);
            setUsernameClass("form-control is-valid");
            setUsernameError("");
            setUsername(input);
        }
    }

    function handlePasswordChange(input) {
        if(input === "") {
            setHasPasswordError(true);
            setPasswordClass("form-control is-invalid");
            setPasswordError("Cannot be blank");
            setPassword("");
        } else {
            setHasPasswordError(false);
            setPasswordClass("form-control is-valid");
            setPasswordError("");
            setPassword(input);
        }
    }

    function handleSubmit(event) {
        console.log("LOGIN");
        event.preventDefault();
        if(hasPasswordError || hasUsernameError) {
            console.log("HAS ERROR");
            setSubmitMsgError(true, "Please fix the error(s) above");
        } else {
            setSubmitMsgError(false, "");
            login();
        }
    }

    function setPasswordMsgError() {
        if(password === "") {
            setPasswordClass("form-control is-invalid");
            setPasswordError("Cannot be blank");
            setHasPasswordError(true);
            return true;
        } else {
            setHasPasswordError(false);
            setPasswordClass("form-control is-valid");
            setPasswordError("");
            return false
        }
    }

    function setUsernameMsgError() {
        if(username === "") {
            setHasUsernameError(true);
            setUsernameClass("form-control is-invalid");
            setUsernameError("Cannot be blank");
            return true;
        } else {
            setHasUsernameError(false);
            setUsernameClass("form-control is-valid");
            setUsernameError("");
            return false;
        }
    }

    function setSubmitMsgError(hasError, message) {
        setHasSubmitError(hasError);
        setSubmitError(message);
    }

    function login() {
        const pwdError = setPasswordMsgError();
        const unError = setUsernameMsgError();
        if(pwdError || unError) {
            setSubmitMsgError(true, "Please fix the error(s) above");
        }else{
            // login
            console.log("LOGGED IN");
        }
    }

    function renderErrorMessage(message) {
        return(
            <div className="invalid-feedback">
                {message}
            </div>
        );
    }

    function renderSubmitError(message) {
        return(
            <div className="alert alert-danger" role="alert">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-triangle-fill" viewBox="0 0 16 16">
                    <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                </svg>
                {message}
            </div>
        );
    }

    return (
        <div className="login-component">
            <div className="login-form">
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <div className="row mb-3">
                        <label for="username">Username/Email:</label>
                        <div className="col-sm-10">
                            <input type="text" className={usernameClass} id="username" name="username" placeholder="Enter your username/email. . ." onChange={(e) => handleUsernameChange(e.target.value)} onBlur={(e) => handleUsernameChange(e.target.value)}></input>
                            {hasUsernameError && renderErrorMessage(usernameError)}
                        </div>
                    </div>

                    <div className="row mb-3">
                        <label for="password">Password:</label>
                        <div className="col-sm-10">
                            <input type="password" className={passwordClass} id="password" name="password" placeholder="Enter your password. . ." onChange={(e) => handlePasswordChange(e.target.value)} onBlur={(e) => handlePasswordChange(e.target.value)}></input>
                            {hasPasswordError && renderErrorMessage(passwordError)}
                        </div>
                    </div>
                    
                    <div className="row mb-3">
                        <div className="col-sm-10">
                            <input type="submit" value="Login" className="btn btn-primary"></input>
                            {hasSubmitError && renderSubmitError(submitError)}
                        </div>
                    </div>

                    <div className="row mb-3">
                        <div className="col-sm-10">
                            Don't have an account? Sign up <Link to="/register">here</Link>!
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;
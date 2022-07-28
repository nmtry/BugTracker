import { useState } from "react";

const Login = () => {
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
            setSubmitMsgError(true, "Cannot Login: Please fix the error(s) above");
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
            setSubmitMsgError(true, "Cannot Login: Please fix the error(s) above");
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
            <div class="alert alert-danger" role="alert">
                {message}
            </div>
        );
    }

    return (
        <>
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
            </form>
        </>
    );
};

export default Login;
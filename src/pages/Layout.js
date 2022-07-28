import { Outlet, Link } from "react-router-dom";
import { useState } from "react";
import '../css/Layout-css.css';

const Layout = () => {
    const[homeActive, setHomeActive] = useState("nav-link active");
    const[loginActive, setLoginActive] = useState("nav-link");

    function handleHomeClick() {
        setHomeActive("nav-link active");
        setLoginActive("nav-link");
    }

    function handleLoginClick() {
        setLoginActive("nav-link active");
        setHomeActive("nav-link");
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">BugTracker</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={homeActive} aria-current="page" to="/" onClick={(e) => handleHomeClick()}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={loginActive} to="/login" onClick={(e) => handleLoginClick()}>Login</Link>
                            </li>
                        </ul>
                        <span className="navbar-text">
                            Placeholder
                        </span>
                    </div>
                </div>
            </nav>
            <Outlet />
        </>
    );
}
export default Layout;
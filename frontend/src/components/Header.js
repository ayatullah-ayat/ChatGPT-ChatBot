
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context";
import { AuthUpdateContext } from "../context";

const Header = () => {
    const user = useContext(AuthContext);
    const setAuthUser = useContext(AuthUpdateContext);
    const navigate = useNavigate();
    const logoutHandler = () => {
        window.localStorage.removeItem('loggedUser');
        setAuthUser(null);

        navigate('/')
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link className="navbar-brand" to="/">ChatBot</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/chatbot">Chatbot</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        { !user ? <><li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/register">Register</Link>
                        </li></> : <li className="nav-item">
                            <button className="nav-link" onClick={ logoutHandler }>Logout</button>
                        </li> }
                        
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header;
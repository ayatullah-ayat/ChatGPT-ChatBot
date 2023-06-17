
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link class="navbar-brand" to="/">ChatBot</Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <Link class="nav-link" to="/">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/chatbot">Chatbot</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="about">About</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header;
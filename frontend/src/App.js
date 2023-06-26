import Header from "./components/Header";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import ChatBot from "./pages/Chatbot";
import About from "./pages/About";
import Login from "./pages/Login";
import { AuthContext } from "./context";
import { useContext } from "react";


function App() {

    const user = useContext(AuthContext);
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/chatbot" element={<ChatBot />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={ user ? <Login /> : <Navigate replace to={'/'} />} />
            </Routes>
        </div>
    );
}

export default App;

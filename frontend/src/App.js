import Header from "./components/Header";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import ChatBot from "./pages/Chatbot";
import About from "./pages/About";
import Login from "./pages/Login";
import { AuthContext } from "./context";
import { useContext } from "react";
import Register from "./pages/Register";
import NotFound from "./pages/404";


function App() {

    const user = useContext(AuthContext);
    console.log('App_user', user);
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/chatbot" element={<ChatBot />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={ !user ? <Login /> : <Navigate replace to={'/'} />} />
                <Route path="/register" element={<Register />} />
                <Route path="/*" element={<NotFound />} />
            </Routes>
        </div>
    );
}

export default App;

import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ChatBot from "./pages/Chatbot";
import About from "./pages/About";
import Login from "./pages/Login";

function App() {
  return (
    <div>
        <Header />
        <Routes>
            <Route path="/" element={ <Home /> }/>
            <Route path="/chatbot" element={ <ChatBot /> }/>
            <Route path="/about" element={ <About /> }/>
            <Route path="/login" element={ <Login /> }/>
        </Routes>
    </div>
  );
}

export default App;

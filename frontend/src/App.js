import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
        <Header />
        <Routes>
            <Route path="/" element={  }/>
        </Routes>
        <div className="container">
            <h2>bootstrap init</h2>
        </div>
    </div>
  );
}

export default App;

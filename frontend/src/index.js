import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthContext } from './context';
import { AuthUpdateContext } from './context';

import 'bootstrap/dist/css/bootstrap.css';


const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    
    useEffect(() => {
        const loggedUser = window.localStorage.getItem('loggedUser');;
        if(loggedUser){
            setUser(loggedUser)
        }
    }, []);


    const setAuthUser = (user) => {
        setUser(user)
    }

    return (
        <AuthContext.Provider value={ user }>
            <AuthUpdateContext.Provider value={ setAuthUser }>
                { children }
            </AuthUpdateContext.Provider>
        </AuthContext.Provider>
    );
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <Router>
            <UserProvider>
                <App />
            </UserProvider>
        </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import NavBar from '../navBar/NavBar';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
    return (
        <Router>
            <NavBar />
            <Route></Route>
        </Router>
    );
}

export default App;

import './App.css';

import React from 'react';
import {Outlet} from 'react-router-dom';
import {NavBar, Footer} from "./components";

const App = () => {

    return (
        <>
            <NavBar/>
            <Outlet/>
            <Footer/>
        </>
    );
}

export default App;

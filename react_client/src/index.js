import React from 'react';
import ReactDOM from "react-dom/client";
import './index.css';
import App from './App';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {AuthProvider, RequireAuth} from "react-auth-kit";
import {LoginPage, UsersPage, Home} from "./pages";
import {StyledEngineProvider} from '@mui/material/styles';

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <StyledEngineProvider injectFirst>
            <AuthProvider authType={'cookie'}
                          authName={'_auth'}
                          cookieDomain={window.location.hostname}
                          cookieSecure={window.location.protocol === "https:"}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<App/>}>
                            <Route index element={<Home/>}/>
                            <Route path="login" element={<LoginPage/>}/>
                            <Route path='users' element={
                                <RequireAuth loginPath={'/login'}>
                                    <UsersPage/>
                                </RequireAuth>
                            }/>
                        </Route>
                    </Routes>
                </BrowserRouter>,
            </AuthProvider>
        </StyledEngineProvider>

    </React.StrictMode>,
);

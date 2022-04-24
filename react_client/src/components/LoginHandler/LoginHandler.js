import React from 'react';
import {useIsAuthenticated, useSignOut} from "react-auth-kit";
import {Link} from "react-router-dom";


const LoginHandler = () => {
    const isAuthenticated = useIsAuthenticated()
    const signOut = useSignOut()

    return (
        <>
            {isAuthenticated() ? (

                <Link to="/" style={{textDecoration: 'none'}} onClick={() => signOut()}>

                    Logout

                </Link>
            ) : (
                <Link to="/login" style={{textDecoration: 'none'}}>

                    Login

                </Link>
            )}
        </>


    )
}

export default LoginHandler
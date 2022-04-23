import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import {LoginHandler} from "../index";
import {Link} from "react-router-dom";


const NavBar = () => {
    const appBarLinks = [
        {to: "", name: 'Home'},
        {to: "users", name: 'Users'},
    ]
    return (
        <Box sx={{flex: 1}}>
            <AppBar position="static">
                <Toolbar>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{mr: 2, display: {xs: 'none', md: 'flex'}}}
                    >
                        REACT
                    </Typography>
                    {appBarLinks.map((link, index) => {
                        const {to, name} = link
                        return (
                            <Typography key={index} textAlign="center" variant="h6" component="div" sx={{flex: 1}}>
                                <Link to={to} style={{textDecoration: 'none'}}>{name}</Link>
                            </Typography>
                        )
                    })}
                    <Typography textAlign="center" variant="h6" component="div" sx={{flex: 1}}>
                        <LoginHandler/>
                    </Typography>

                </Toolbar>
            </AppBar>
        </Box>
    )
}


export default NavBar;



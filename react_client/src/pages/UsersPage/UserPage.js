import React, {useEffect, useState} from 'react';
import {NewUserForm, UserCard} from "./components";
import {Grid} from "@mui/material";

import axios from "../../axios.config";

const usersMock = [
    {firstName: "Testf 1", lastName: "TestL 1", email: 'michal.kacprzak@gmail.com'},
    {firstName: "Testf 2", lastName: "TestL 2", email: 'michal.kacprzak@gmail.com'},
    {firstName: "Testf 3", lastName: "TestL 3", email: 'michal.kacprzak@gmail.com'},
    {firstName: "Testf 4", lastName: "TestL 4", email: 'michal.kacprzak@gmail.com'},
]

const UserPage = () => {
    const [users, setUsers] = useState([])

    const fetchUsers = () => {
        //TODO test + update URL
        setUsers(usersMock)
        // axios.get(`users/`)
        //     .then(res => {
        //         if (res.status === 200) {
        //             setUsers(res.data)
        //         }
        //     })
        //     .catch((error) => {
        //         if (error.response) {
        //             console.error(error.response.data); // => the response payload
        //         }
        //     });
    }

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <>
            <NewUserForm setUsers={setUsers}/>
            <Grid
                container
                justifyContent="space-evenly"
                alignItems="center"
                spacing={2}
            >
                {users.map((user, index) => {
                    return (
                        <Grid key={index} item>
                            <UserCard user={user}/>
                        </Grid>
                    )
                })}
            </Grid>
        </>
    );
};

export default UserPage;
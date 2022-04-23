import React from 'react';
import {useForm, Controller, FormProvider} from "react-hook-form";
import {
    Button,
    Container,
    CssBaseline,
    TextField
} from "@mui/material";

import Typography from "@mui/material/Typography";
import axios from "../../../../axios.config";

const NewUserForm = ({setUsers}) => {
    console.log(setUsers)
    const {handleSubmit, control} = useForm();


    const handleAddUser = (newUserData) => {
        console.log(newUserData)
        // TODO
        setUsers(users=> [...users, newUserData]);

        // axios.post('v1/users/auth/login/', newUserData)
        //
        //     .then(res => {
        //         if (res.status === 200) {
        //                 //TODO add to list
        //                 // navigate("/users")
        //         }
        //     })
        //     .catch((error) => {
        //         if (error.response) {
        //             console.error(error.response.data);
        //             const err = document.getElementById("error");
        //
        //             const email = error.response.data["email"];
        //             const message = error.response.data["nonFieldErrors"];
        //
        //             typeof email !== 'undefined' ? err.innerHTML = email :
        //                 typeof message !== 'undefined' ? err.innerHTML = message : err.innerHTML = "";
        //
        //             err.style.color = "red";
        //         }
        //     });

    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <div>
                <p id="error"></p>

                <Typography component="h1" variant="h5">
                    Add User
                </Typography>
                <FormProvider {...handleSubmit}>
                    <form onSubmit={handleSubmit(handleAddUser)}>
                        <Controller
                            render={({field}) => (
                                <TextField {...field}
                                           fullWidth
                                           label="First Name"
                                           required
                                           onChange={(e) => field.onChange(e)}
                                           value={field.value}
                                />
                            )}
                            name="firstName"
                            control={control}
                            defaultValue=""
                            label="First Name"
                        />
                        <Controller
                            render={({field}) => (
                                <TextField {...field}
                                           fullWidth
                                           label="Last Name"
                                           required
                                           onChange={(e) => field.onChange(e)}
                                           value={field.value}
                                />
                            )}
                            name="lastName"
                            control={control}
                            defaultValue=""
                            label="Last Name"
                        />
                        <Controller
                            render={({field}) => (
                                <TextField {...field}
                                           fullWidth
                                           label="Email Address"
                                           required
                                           onChange={(e) => field.onChange(e)}
                                           value={field.value}
                                />
                            )}
                            name="email"
                            control={control}
                            defaultValue=""
                            label="Email Address"
                        />

                        <Controller
                            render={({field}) => (
                                <TextField {...field}
                                           fullWidth
                                           label="Password"
                                           type="password"
                                           required
                                           onChange={(e) => field.onChange(e)}
                                           value={field.value}
                                />
                            )}
                            name="password"
                            control={control}
                            defaultValue=""
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                        >
                            Add User
                        </Button>

                    </form>
                </FormProvider>
            </div>
        </Container>
    );
};

export default NewUserForm;
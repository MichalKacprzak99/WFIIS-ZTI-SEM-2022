import React from 'react';
import {useNavigate} from 'react-router-dom';
import {useForm, Controller, FormProvider} from "react-hook-form";
import axios from "../../axios.config";
import {
    Button,
    Container,
    CssBaseline,
    TextField
} from "@mui/material";

import Typography from "@mui/material/Typography";
import {useSignIn} from "react-auth-kit";


const LoginPage = () => {
    const {handleSubmit, control} = useForm();
    const signIn = useSignIn()
    const navigate = useNavigate();

    const handleLogin = (loginData) => {
        console.log(loginData)
        // TODO test + update url
        axios.post('v1/users/auth/login/', loginData)
            .then(res => {
                if (res.status === 200) {
                    if (signIn({
                        token: res.data.token,
                        expiresIn: res.data.expiresIn,
                        tokenType: "Bearer",
                        authState: res.data.authUserState,
                    })){
                        // Redirect or do-something
                        navigate("/")
                    }

                }
            })
            .catch((error) => {
                if (error.response) {
                    console.error(error.response.data);
                    const err = document.getElementById("error");

                    const email = error.response.data["email"];
                    const message = error.response.data["nonFieldErrors"];

                    typeof email !== 'undefined' ? err.innerHTML = email :
                        typeof message !== 'undefined' ? err.innerHTML = message : err.innerHTML = "";

                    err.style.color = "red";
                }
            });

    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <div>
                <p id="error"></p>

                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <FormProvider {...handleSubmit}>
                    <form onSubmit={handleSubmit(handleLogin)}>
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
                            Sign In
                        </Button>

                    </form>
                </FormProvider>
            </div>
        </Container>
    );
};

export default LoginPage;
import React from 'react';
import {useForm, Controller, FormProvider} from "react-hook-form";
import {
    Button,
    Container,
    CssBaseline, Grid,
    TextField
} from "@mui/material";
import {useAuthHeader} from 'react-auth-kit'

import Typography from "@mui/material/Typography";
import axios from "../../../../axios.config";

const NewPostForm = ({setPosts}) => {
    const authHeader = useAuthHeader()
    const {handleSubmit, control} = useForm();

    const handleAddPost = (newPost) => {

        axios.post('post/add/', newPost, {
            headers: {
                'Authorization': authHeader()
            }
        }).then(res => {
            if (res.status === 200) {
                setPosts(posts => [...posts, res.data]);
            }
        }).catch((error) => {
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
            <Grid>
                <p id="error"></p>

                <Typography component="h1" variant="h5">
                    Add Post
                </Typography>
                <FormProvider {...handleSubmit}>
                    <form onSubmit={handleSubmit(handleAddPost)}>
                        <Controller
                            render={({field}) => (
                                <TextField {...field}
                                           fullWidth
                                           label="content"
                                           required
                                           onChange={(e) => field.onChange(e)}
                                           value={field.value}
                                />
                            )}
                            name="content"
                            control={control}
                            defaultValue=""
                            label="Content"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                        >
                            Add Post
                        </Button>

                    </form>
                </FormProvider>
            </Grid>
        </Container>
    );
};

export default NewPostForm;
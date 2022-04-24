import React, {useEffect, useState} from 'react';
import {NewPostForm, PostCard} from "./components";
import {Grid} from "@mui/material";

import axios from "../../axios.config";
import {useAuthHeader} from "react-auth-kit";


const PostsPage = () => {
    const [posts, setPosts] = useState([])
    const authHeader = useAuthHeader()

    const fetchPosts = () => {
        axios.get(`post/all/`, {
            headers: {
                'Authorization': authHeader()
            }
        }).then(res => {
            if (res.status === 200) {
                setPosts(res.data)
            }
        }).catch((error) => {
            if (error.response) {
                console.error(error.response.data); // => the response payload
            }
        });
    }

    useEffect(() => {
        fetchPosts();
    }, []);

    return (
        <>
            <NewPostForm setPosts={setPosts}/>
            <Grid
                container
                justifyContent="space-evenly"
                alignItems="center"
                spacing={2}
                paddingTop={10}
            >
                {posts.map(post => {
                    return (
                        <Grid key={post.id} item>
                            <PostCard post={post}/>
                        </Grid>
                    )
                })}
            </Grid>
        </>
    );
};

export default PostsPage;
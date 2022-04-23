import React from 'react';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";


const UserCard = ({user}) => {

    const {firstName, lastName, email} = user

    return (
        < Card>
            <CardContent>
                <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Grid item>
                        < Typography>
                            First Name: {firstName}
                        </Typography>
                        <Typography>
                            Last Name {lastName}
                        </Typography>
                        <Typography>
                            Email: {email}
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default UserCard;
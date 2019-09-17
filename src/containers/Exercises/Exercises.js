import React, { Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Typography, List, ListItem, ListItemText } from '@material-ui/core';

const style = {
    Paper: { padding: 10, marginTop: 10, marginBottom: 10, height: 500, overflowY: 'auto' }
};

const Exercises = props => {
    return (
        <Grid container>
            <Grid item sm>
                <Paper style={style.Paper}>
                    {props.exercises.map(([group, exercisesList], index) => (
                        <Fragment key={index}>
                            <Typography
                                variant='subtitle1'
                                style={{ textTransform: 'capitalize' }}>
                                {group}
                            </Typography>

                            <List component="ul">
                                {exercisesList.map((exercise, index) => (
                                    <ListItem key={index} button>
                                        <ListItemText primary={exercise.title} />
                                    </ListItem>
                                ))}
                            </List>
                        </Fragment>
                    ))}
                </Paper>
            </Grid>
            <Grid item sm>
                <Paper style={style.Paper}>
                    <Typography variant='subtitle1'>
                        Welcome!
                    </Typography>
                    <Typography
                        variant='subtitle2'
                        style={{ marginTop: 20 }}>
                        Please select Exercise from the left pane
                    </Typography>
                </Paper>
            </Grid>
        </Grid>
    );
};

export default Exercises;

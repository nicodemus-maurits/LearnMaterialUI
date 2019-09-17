import React, { Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Typography, List, ListItem, ListItemText } from '@material-ui/core';

const style = {
    Paper: { padding: 10, marginTop: 10, marginBottom: 10, height: 500, overflowY: 'auto' }
};

const Exercises = props => {
    const { exercises, category, onSelect, selectedExercise } = props;
    const { 
        title = 'Welcome',
        description = 'Please select Exercise from the left pane'
    } = selectedExercise;

    return (
        <Grid container>
            <Grid item sm>
                <Paper style={style.Paper}>
                    {exercises.map(([group, exercisesList], index) => (
                        !category || category === group
                            ? < Fragment key={index} >
                                <Typography
                                    variant='subtitle1'
                                    style={{ textTransform: 'capitalize' }}>
                                    {group}
                                </Typography>

                                <List component="ul">
                                    {exercisesList.map((exercise, index) => (
                                        <ListItem 
                                        key={index} 
                                        button 
                                        onClick={() => onSelect(exercise.id)}>
                                            <ListItemText primary={exercise.title} />
                                        </ListItem>
                                    ))}
                                </List>
                            </Fragment>
                            : null
                    ))}
                </Paper>
            </Grid>
            <Grid item sm>
                <Paper style={style.Paper}>
                    <Typography variant='subtitle1'>
                        {title}
                    </Typography>
                    <Typography
                        variant='subtitle2'
                        style={{ marginTop: 20 }}>
                        {description}
                    </Typography>
                </Paper>
            </Grid>
        </Grid>
    );
};

export default Exercises;

import React from 'react';
import { Paper, Typography } from '@material-ui/core';

const RightPane = props => {
    const { selectedExercise, style } = props;
    const {
        title = 'Welcome',
        description = 'Please select Exercise from the left pane'
    } = selectedExercise;

    return (
        <Paper style={style}>
            <Typography variant='subtitle1'>
                {title}
            </Typography>
            <Typography
                variant='subtitle2'
                style={{ marginTop: 20 }}>
                {description}
            </Typography>
        </Paper>
    );
};

export default RightPane;

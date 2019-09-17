import React, { Fragment } from 'react';
import { Typography, Paper, List, ListItem, ListItemText } from '@material-ui/core';

const LeftPane = props => {
    const { style, exercises, category, onSelect } = props;

    return (
        <Paper style={style}>
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
    );
};

export default LeftPane;
